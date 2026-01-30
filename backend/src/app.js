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
      const menu = await db.getMenu();
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
    else if (pathname === '/api/health') {
      sendJSON(res, { status: 'healthy' });
    }
    else {
      sendJSON(res, { error: 'Route not found' }, 404);
    }
  } catch (error) {
    console.error('Server error:', error);
    sendJSON(res, { error: 'Server error' }, 500);
  }
});

server.listen(3001, () => {
  console.log('🚀 Backend API running on http://localhost:3001');
});

module.exports = server;