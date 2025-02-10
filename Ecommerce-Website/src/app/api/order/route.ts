import { createClientForServer } from "@/utils/supabase/server";
import {NextResponse } from "next/server";

export async function GET() {
    const supabase = await createClientForServer();
    
    const { data, error } = await supabase
        .from('orders') // Ensure this matches the actual table name
        .select('order_id, product_name');

    console.log('Data:', data); // Log fetched data
    console.log('Error:', error); // Log any errors

    // Return the fetched data in the response
    return NextResponse.json({ data, error });
}
