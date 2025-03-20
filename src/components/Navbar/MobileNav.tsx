import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../util/api/firebase";
import { signOut, User, onAuthStateChanged } from "firebase/auth";
type Nav = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileNav({ isOpen, onClose }: Nav) {
  const [user, setUser] = useState<User | null>(null);
  const closeNav = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    onClose();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: User | null) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  return isOpen ? (
    <div className="bg-SeaShell mt-[22px] z-50 w-full fixed left-0 pb-10">
      <div className="flex justify-start items-start px-[24px] font-Poppins font-bold flex-col gap-5">
        <Link to="/budi/" onClick={closeNav}>
          what we do
        </Link>
        <Link to="/budi/findabudi" onClick={closeNav}>
          find a budi
        </Link>
        <Link to="/budi/beabudi" onClick={closeNav}>
          be a budi
        </Link>
        <Link to="/budi/ourstory" onClick={closeNav}>
          our story
        </Link>
        <Link to="/budi/contact" onClick={closeNav}>
          contact us
        </Link>
        <Link to="/budi/realstories" onClick={closeNav}>
          real stories
        </Link>
        {!user ? (
          <div>
            <Link to="/budi/login" onClick={closeNav}>
              login
            </Link>
            <p>or</p>
            <Link to="/budi/register" onClick={closeNav}>
              register
            </Link>
          </div>
        ) : (
          <button onClick={handleLogout}>logout</button>
        )}
      </div>
    </div>
  ) : null;
}
