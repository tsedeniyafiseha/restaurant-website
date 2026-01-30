// Simple Restaurant API Server
const http = require('http');
const url = require('url');
const { db } = require('./database');

const setCORS = (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
};

const sendJSON = (res, data, status = 200) => {
  setCORS(res);
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
};

const getBody = (req) => {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        resolve({});
      }
    });
  });
};

const server = http.createServer(async (req, res) => {
  setCORS(res);
  
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const { pathname, query } = url.parse(req.url, true);

  try {
    if (pathname === '/api/menu') {
      console.log('Fetching menu from database...');
      const menu = await db.getMenu();
      console.log('Menu data retrieved:', menu ? menu.length : 0, 'items');
      sendJSON(res, { success: true, data: menu });
    }
    else if (pathname === '/api/menu/traditional') {
      const menu = await db.getMenuByCategory('traditional');
      sendJSON(res, { success: true, data: menu });
    }
    else if (pathname === '/api/menu/international') {
      const menu = await db.getMenuByCategory('international');
      sendJSON(res, { success: true, data: menu });
    }
    else if (pathname === '/api/menu/search') {
      const results = await db.searchMenu(query.q || '');
      sendJSON(res, { success: true, data: results });
    }
    else if (pathname === '/api/contact' && req.method === 'POST') {
      const body = await getBody(req);
      
      if (!body.firstName || !body.email || !body.message) {
        sendJSON(res, { error: 'Missing required fields' }, 400);
        return;
      }
      
      const contact = {
        first_name: body.firstName,
        last_name: body.lastName || '',
        email: body.email,
        phone: body.phone || '',
        subject: body.subject || '',
        message: body.message
      };
      
      await db.saveContact(contact);
      sendJSON(res, { success: true, message: 'Message sent successfully!' });
    }
    else if (pathname === '/api/orders' && req.method === 'POST') {
      const body = await getBody(req);
      
      if (!body.customer_name || !body.customer_email || !body.customer_phone || !body.items || !body.total_amount) {
        sendJSON(res, { error: 'Missing required fields' }, 400);
        return;
      }
      
      const order = {
        customer_name: body.customer_name,
        customer_email: body.customer_email,
        customer_phone: body.customer_phone,
        customer_address: body.customer_address || '',
        notes: body.notes || '',
        items: JSON.stringify(body.items),
        total_amount: body.total_amount,
        status: 'pending'
      };
      
      const orderId = await db.saveOrder(order);
      sendJSON(res, { 
        success: true, 
        message: 'Order placed successfully!', 
        orderId: orderId 
      });
    }
    else if (pathname === '/api/orders' && req.method === 'GET') {
      const orders = await db.getOrders();
      sendJSON(res, { success: true, data: orders });
    }
    else if (pathname.startsWith('/api/orders/') && pathname.endsWith('/status') && req.method === 'PUT') {
      const orderId = pathname.split('/')[3];
      const body = await getBody(req);
      
      if (!body.status) {
        sendJSON(res, { error: 'Status is required' }, 400);
        return;
      }
      
      await db.updateOrderStatus(orderId, body.status);
      sendJSON(res, { success: true, message: 'Order status updated successfully!' });
    }
    else if (pathname === '/api/health') {
      sendJSON(res, { status: 'healthy' });
    }
    else {
      sendJSON(res, { error: 'Route not found' }, 404);
    }
  } catch (error) {
    console.error('Server error:', error);
    sendJSON(res, { error: 'Server error', details: error.message }, 500);
  }
});

server.listen(3001, () => {
  console.log('🚀 Backend API running on http://localhost:3001');
});

module.exports = server;