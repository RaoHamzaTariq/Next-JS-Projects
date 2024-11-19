

export default async function Home() {

    const fetchData = async () => {
      const apiKey = process.env.NEXT_PUBLIC_COINLAYER_API_KEY;
      try {
        const response = await fetch(
          `http://api.coinlayer.com/live?access_key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        console.log(result);
        
     
      } catch (err: any) {
        console.log(err);
        
      }
    };

    const data = await fetchData();


  return (
    <div>
      <h1>ISR</h1>
      <br />
      <input type="text" name="input"/>
      <button type="submit">Submit</button>
    </div>
  );
}
