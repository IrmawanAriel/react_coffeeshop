import HeaderProduct from '../images/HeaderProduct.png';
import PromoCards from '../components/PromoCards';
import FilterComponent from '../components/filter';

function Product() {



  return (
    <main>
      <section>
        <section
          className="container-header h-36 md:h-80 w-full flex items-center bg-cover"
          style={{ backgroundImage: `url(${HeaderProduct})` }} >
          <p className="text-header font-semibold text-white text-wrap md:text-5xl md:px-32 text-lg px-8">
            We Provide Good Coffee and Healthy Meals
          </p>
        </section>
      </section>

      

        <PromoCards />


        <FilterComponent />
        
    </main>
  );
}

export default Product;
