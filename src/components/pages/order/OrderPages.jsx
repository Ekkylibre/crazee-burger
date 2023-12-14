import { Link, useParams } from "react-router-dom";

export default function OrderPages() {
  // state
  const {username} = useParams()

  // comportement

  // affichage
  return <div>
    <h1>Bonjour {username}</h1>
    <Link to="/"
    ><button>Déconnexion</button>
    </Link>
  </div>
}
