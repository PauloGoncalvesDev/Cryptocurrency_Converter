import axios from "axios";

export async function getCoingeckoCoinList(
  language: string = "brl"
): Promise<ICoinBase[]> {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${language}&order=volume_desc&per_page=250&page=1&sparkline=false&locale=en`
    );

    const coinList: ICoinBase[] = response.data.map((coin: ICoinBase) => ({
      id: coin.id,
      name: coin.name,
      image: coin.image,
      current_price: coin.current_price,
      symbol: coin.symbol,
    }));

    return coinList;
  } catch (error) {
    return [];
  }
}
