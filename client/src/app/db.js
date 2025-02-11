// Nový soubor: /client/src/app/db.js
import { supabase } from './supabase'

export const db = {
  // Vytvořit nový záznam
  async create(table, data) {
    const { data: result, error } = await supabase
      .from(table)
      .insert(data)
      .select()
    if (error) throw error
    return result
  },

  // Získat záznamy
  async get(table, query = {}) {
    const { data, error } = await supabase
      .from(table)
      .select(query.select || '*')
      .match(query.match || {})
    if (error) throw error
    return data
  },

  // Aktualizovat záznam
  async update(table, match, data) {
    const { data: result, error } = await supabase
      .from(table)
      .update(data)
      .match(match)
      .select()
    if (error) throw error
    return result
  },

  // Smazat záznam
  async delete(table, match) {
    const { error } = await supabase
      .from(table)
      .delete()
      .match(match)
    if (error) throw error
    return true
  }
}