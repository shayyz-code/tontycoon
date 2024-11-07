import IconHome from "./icons/home";
import IconHomeSolid from "./icons/homesolid";
import IconWallet from "./icons/wallet";
import IconWalletSolid from "./icons/walletsolid";
import IconCurrencyDollar from "./icons/currencydollar";
import IconCurrencyDollarSolid from "./icons/currencydollarsolid";
import IconUsers from "./icons/users";
import IconUsersSolid from "./icons/userssolid";

const navlinks = [
  {
    href: "/",
    name: "Home",
    icon: IconHome,
    iconSolid: IconHomeSolid,
  },
  {
    href: "/earn",
    name: "Earn",
    icon: IconCurrencyDollar,
    iconSolid: IconCurrencyDollarSolid,
  },
  {
    href: "/frens",
    name: "Frens",
    icon: IconUsers,
    iconSolid: IconUsersSolid,
  },
  {
    href: "/payout",
    name: "Payout",
    icon: IconWallet,
    iconSolid: IconWalletSolid,
  },
];

export { navlinks };
