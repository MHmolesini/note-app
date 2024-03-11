import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
)

// Database
const tableNotes = 'notes'
const tableProducts = 'products'

// export const fetchProducts = async() => {
//     const {data, error} = await supabase    
//         .from(tableProducts)
//         .select('*')

//     if(error) {
//         console.error('Error al obtener datos', error)
//         return
//     }

//     console.log('Datos obtenidos', data)

//     // Llama a la funcion fetchProducts para recuperar datos 
//     return data
// }

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

export const getNotes = async() => {
    try {
        const {data, error} = await supabase
            .from('notes')
            .select('title, text')

        console.log('data from SB', data)
        return data

    } catch (error) {
        console.error(error)
    }
}

// async function getNotes() {
//     try {
//         const {data, error} = await supabase
//             .from('notes')
//             .select('*')

//         if (error) throw error;
//         if (data != null) {
//             setNotes(data)
//         }
//     } catch (error) {
//         alert(error)
//     }
//   }