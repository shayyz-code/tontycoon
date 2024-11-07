import FarmPanel from "@components/Home/FarmPanel";
import GamePanel from "@components/Home/GamePanel";
import MainPanel from "@components/Home/MainPanel";
import AuthProvider from "@context/ContextAuth";
import UserDataProvider from "@context/ContextUserData";

export default function PageHome() {
  return (
    <>
      <AuthProvider>
        <UserDataProvider>
          <MainPanel />
          <FarmPanel />
          <GamePanel />
        </UserDataProvider>
      </AuthProvider>
    </>
  );
}
