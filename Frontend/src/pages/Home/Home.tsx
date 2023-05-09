import axios from 'axios';
import React, { useEffect } from 'react'

export default function Home() {

      useEffect(() => {
            testHTTP()
      }, []);

      const testHTTP = async () => {
            axios.get('http://localhost:5117/users')
                  .then((response) => {
                        console.log(response.data, "response.data");
                  }).catch((error) => {
                        console.log(error);
                  });
      }
      return (
            <div>Home</div>
      )
}
