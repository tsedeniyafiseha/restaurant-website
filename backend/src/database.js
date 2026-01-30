// Simple Supabase Database Connection
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://nzioipimfegguuaqvbul.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56aW9pcGltZmVnZ3V1YXF2YnVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3NzE4NDMsImV4cCI6MjA4NTM0Nzg0M30.YHOARugbREuwmcpTMJFi2IM8lTUiidl3pJK2rrIYiV4'
);

const db = {
  async getMenu() {
    try {
      console.log('Querying menu_items table...');
      const { data, error } = await supabase.from('menu_items').select('*').eq('available', true);
      if (error) {
        console.error('Database error:', error);
        return [];
      }
      console.log('Database returned:', data ? data.length : 0, 'items');
      return data || [];
    } catch (error) {
      console.error('Error in getMenu:', error);
      return [];
    }
  },

  async getMenuByCategory(category) {
    try {
      const { data, error } = await supabase.from('menu_items').select('*').eq('category', category).eq('available', true);
      if (error) {
        console.error('Database error:', error);
        return [];
      }
      return data || [];
    } catch (error) {
      console.error('Error in getMenuByCategory:', error);
      return [];
    }
  },

  async searchMenu(query) {
    try {
      const { data, error } = await supabase.from('menu_items').select('*').ilike('name', `%${query}%`).eq('available', true);
      if (error) {
        console.error('Database error:', error);
        return [];
      }
      return data || [];
    } catch (error) {
      console.error('Error in searchMenu:', error);
      return [];
    }
  },

  async saveContact(contact) {
    try {
      const { data, error } = await supabase.from('contact_submissions').insert([contact]).select();
      if (error) {
        console.error('Database error:', error);
        throw error;
      }
      return data[0];
    } catch (error) {
      console.error('Error in saveContact:', error);
      throw error;
    }
  }
};

module.exports = { db };