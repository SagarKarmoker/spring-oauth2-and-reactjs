import axios from "axios";
import { useEffect, useState } from "react"

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:8080/user", {
          withCredentials: true
        })
  
        if (response.status === 200) {
          setUser(response.data)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchUser();
  }, [])

  return (
    <div>
      <h3>Dashboard</h3>
      {
        user ? (
          <div>
            <p>Name: {user.name} </p>
            <p>Email: {user.email}</p>
            <div>
              <img src={user?.picture} />
            </div>
          </div>
        ) : (
          <div>
            Loading user data
          </div>
        )
      }
    </div>
  )
}
