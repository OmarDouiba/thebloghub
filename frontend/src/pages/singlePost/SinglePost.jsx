import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function SinglePost() {
  const { id } = useParams(); // Get the route parameter
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3000/posts/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.image} alt="" />
      <p>{data.content}</p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tenetur
        reiciendis asperiores! Nesciunt architecto at hic libero modi dolorem
        quas possimus placeat vitae doloribus consequuntur, aut debitis qui
        molestias vel! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Inventore ullam blanditiis et voluptas quas optio sunt exercitationem ab
        laudantium explicabo obcaecati excepturi, qui ex quae totam. Quis ad sit
        repellat. Consequatur rem ea veniam, commodi at reprehenderit aliquam
        aspernatur asperiores nostrum nam placeat et illum rerum ab
        consequuntur. Consequatur blanditiis quidem modi? Officia maiores fugiat
        blanditiis repudiandae exercitationem odit animi? Optio illo facilis
        delectus, dicta odit a repellat doloribus. Perspiciatis enim earum
        quaerat ipsum sequi quia delectus reiciendis temporibus deleniti facere
        fugiat quas atque sed quis, laboriosam culpa rem voluptatibus?
        Repudiandae dolore tempore ab incidunt autem ex aspernatur maiores sunt
        inventore. Provident vitae fugiat odit. Voluptatibus porro vitae quas
        fugit quod voluptate dolores vel obcaecati. Sequi unde sunt blanditiis
        pariatur! Esse dolorem commodi repellendus rem, magni fuga non tempora
        similique repudiandae optio dolor sunt corporis ullam tenetur veritatis
        perspiciatis quas doloremque minus iste facilis id debitis nulla ab.
        Molestiae, delectus! Ratione, aut, a obcaecati, distinctio molestias
        necessitatibus quibusdam deserunt modi eius delectus perspiciatis
        veritatis quasi officiis iure autem! Eveniet ab ad voluptate eius
        perferendis dolores autem maiores labore error consectetur! Vel
        reprehenderit accusantium deleniti autem aspernatur temporibus magni
        amet iure obcaecati itaque esse nulla officia tempore ipsum deserunt
        necessitatibus sit, facilis tempora, ullam totam. Odio deleniti
        reiciendis neque quo explicabo? Hic quaerat maiores voluptates. Corporis
        dolor reprehenderit ut, aut autem nesciunt eos atque odio quibusdam
        saepe quas hic nihil illum odit ipsum, sint quae quam voluptatum vel
        tempore laudantium illo. Fuga officiis provident nam. Fuga ducimus sunt
        voluptates pariatur, assumenda repellendus hic a similique saepe vel eos
        ad odit omnis quidem ipsum vitae aliquam, cum dolorem doloremque
        architecto numquam dignissimos. Unde incidunt quisquam iure officiis eos
        tenetur error porro praesentium amet, rem eligendi aliquid dolorem quis
        ratione illum hic rerum ex suscipit placeat nobis voluptatum vero.
        Molestias soluta dolores cumque?
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tenetur
        reiciendis asperiores! Nesciunt architecto at hic libero modi dolorem
        quas possimus placeat vitae doloribus consequuntur, aut debitis qui
        molestias vel! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Inventore ullam blanditiis et voluptas quas optio sunt exercitationem ab
        laudantium explicabo obcaecati excepturi, qui ex quae totam. Quis ad sit
        repellat. Consequatur rem ea veniam, commodi at reprehenderit aliquam
        aspernatur asperiores nostrum nam placeat et illum rerum ab
        consequuntur. Consequatur blanditiis quidem modi? Officia maiores fugiat
        blanditiis repudiandae exercitationem odit animi? Optio illo facilis
        delectus, dicta odit a repellat doloribus. Perspiciatis enim earum
        quaerat ipsum sequi quia delectus reiciendis temporibus deleniti facere
        fugiat quas atque sed quis, laboriosam culpa rem voluptatibus?
        Repudiandae dolore tempore ab incidunt autem ex aspernatur maiores sunt
        inventore. Provident vitae fugiat odit. Voluptatibus porro vitae quas
        fugit quod voluptate dolores vel obcaecati. Sequi unde sunt blanditiis
        pariatur! Esse dolorem commodi repellendus rem, magni fuga non tempora
        similique repudiandae optio dolor sunt corporis ullam tenetur veritatis
        perspiciatis quas doloremque minus iste facilis id debitis nulla ab.
        Molestiae, delectus! Ratione, aut, a obcaecati, distinctio molestias
        necessitatibus quibusdam deserunt modi eius delectus perspiciatis
        veritatis quasi officiis iure autem! Eveniet ab ad voluptate eius
        perferendis dolores autem maiores labore error consectetur! Vel
        reprehenderit accusantium deleniti autem aspernatur temporibus magni
        amet iure obcaecati itaque esse nulla officia tempore ipsum deserunt
        necessitatibus sit, facilis tempora, ullam totam. Odio deleniti
        reiciendis neque quo explicabo? Hic quaerat maiores voluptates. Corporis
        dolor reprehenderit ut, aut autem nesciunt eos atque odio quibusdam
        saepe quas hic nihil illum odit ipsum, sint quae quam voluptatum vel
        tempore laudantium illo. Fuga officiis provident nam. Fuga ducimus sunt
        voluptates pariatur, assumenda repellendus hic a similique saepe vel eos
        ad odit omnis quidem ipsum vitae aliquam, cum dolorem doloremque
        architecto numquam dignissimos. Unde incidunt quisquam iure officiis eos
        tenetur error porro praesentium amet, rem eligendi aliquid dolorem quis
        ratione illum hic rerum ex suscipit placeat nobis voluptatum vero.
        Molestias soluta dolores cumque?
      </p>
    </div>
  );
}
