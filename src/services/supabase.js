import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
)

export const createNote = async (title, text) => {
    try {
        const {data, error} = await supabase
            .from('notes')
            .insert([{title, text}])
        return data
    } catch (error) {
        console.error(error)
    }
}