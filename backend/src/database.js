// Simple Supabase Database Connection
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://nzioipimfegguuaqvbul.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56aW9pcGltZmVnZ3V1YXF2YnVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3NzE4NDMsImV4cCI6MjA4NTM0Nzg0M30.YHOARugbREuwmcpTMJFi2IM8lTUiidl3pJK2rrIYiV4'
);

const db = {
  async getMenu() {
    const { data } = await supabase.from('menu_items').select('*').eq('available', true);
    return data || [];
  },

  async getMenuByCategory(category) {
    const { data } = await supabase.from('menu_items').select('*').eq('category', category).eq('available', true);
    return data || [];
  },

  async searchMenu(query) {
    const { data } = await supabase.from('menu_items').select('*').ilike('name', `%${query}%`).eq('available', true);
    return data || [];
  },

  async saveContact(contact) {
    const { data } = await supabase.from('contact_submissions').insert([contact]).select();
    return data[0];
  }
};

module.exports = { db };