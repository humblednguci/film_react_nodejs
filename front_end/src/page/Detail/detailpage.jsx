import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { get } from '../../api/products';

const Detailpage = ({ products }) => {
  const { slug } = useParams();
  const [product, setProduct] = useState({});
  const [recommendedVideos, setRecommendedVideos] = useState([]);

  useEffect(() => {
    get(slug).then(({ data }) => {
      setProduct(data);
    });
  }, [slug]);

  useEffect(() => {
    if (products && products.length > 0) {
      // Tạo một bản sao của mảng products để không ảnh hưởng đến dữ liệu gốc
      const shuffledProducts = [...products]
        .filter(item => item.slug !== slug) // Loại bỏ video hiện tại
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      
      setRecommendedVideos(shuffledProducts);
    }
  }, [products, slug]);

  return (
    <div>
      <div key={slug}>
        <h1 className='text-red-700 text-4xl'>{product.name}</h1>
        {product.video ? (
          <iframe
            className='mx-auto w-[1200px] h-[720px]'
            src={product.video}
            allowFullScreen
            title={product.name}
          ></iframe>
        ) : (
          <p>Video không khả dụng.</p>
        )}
        <p className='text-4xl'>{product.description}</p>

        <h1>Video đề xuất</h1>
        <div className='grid grid-cols-4 gap-4'>
          {recommendedVideos.map((item) => (
            <div key={item._id}>
              <Link to={`/video/${item.slug}`}>
                <img
                  className='w-[400px] h-auto'
                  src={item.image}
                  alt={item.name}
                />
                <h1 className='text-3xl'>{item.name}</h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detailpage;