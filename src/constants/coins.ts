import { Interface } from "readline";

interface Coin {
  ticker: string;
  mint_address: string;
  pool_address: string;
  image: string;
  from_ata: string;
  from_ata_pda: string;
}

export const allowedCoins: Coin[] = [
  {
    ticker: "PEER",
    mint_address: "B2Mc28Ehe4m4TvqJhAVVGnucuKwLgPg88qB9zX87WQEd",
    pool_address: "",
    image: "/image/logo.png",
    from_ata: "EMYEazKVjntZiqaxNpzxgvX1Dou59vJWMS87EmqyApab",
    from_ata_pda: "DMuppmf23iDMZ2yv3wLRos7ddkxZb4QDwJeX9kGB7NXc",
  },
  {
    ticker: "USDC",
    mint_address: "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU",
    pool_address: "5SSkXsEKQepHHAewytPVwdej4epN1nxgLVM84L4KXgy7",
    image: "/image/usdc.png",
    from_ata: "cqYNVxjS7Xin1LmfM7KMwqKockNZpa4yiPkJ1L8ZvWN",
    from_ata_pda: "9BzsJTjC7N2y1qCYAhtYFy1FdNxAUYyfbTiz8XevTVBE",
  },
];
