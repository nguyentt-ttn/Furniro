import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import api from "../axios";

const ProductDetail = ({products}) => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await api.get(`products/${id}`);
      return response.data;
    },
    enabled: !!id, // chỉ chạy query khi có id
  });

  if (isLoading)
    return (
      <div className="cangiua">
        <div
          aria-label="Orange and tan hamster running in a metal wheel"
          role="img"
          className="wheel-and-hamster "
        >
          <div className="wheel"></div>
          <div className="hamster">
            <div className="hamster__body">
              <div className="hamster__head">
                <div className="hamster__ear"></div>
                <div className="hamster__eye"></div>
                <div className="hamster__nose"></div>
              </div>
              <div className="hamster__limb hamster__limb--fr"></div>
              <div className="hamster__limb hamster__limb--fl"></div>
              <div className="hamster__limb hamster__limb--br"></div>
              <div className="hamster__limb hamster__limb--bl"></div>
              <div className="hamster__tail"></div>
            </div>
          </div>
          <div className="spoke"></div>
        </div>
      </div>
    );
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      {/* <div classNameName="product-details">
        <h1>{data?.title}</h1>
        <p>Price: ${data?.price}</p>
        <p>{data?.description}</p>
        {data?.images?.length > 0 ? (
          <img src={data.images[0]} alt={data.title} classNameName=" h-72 object-cover" />
        ) : ( <p>No images available</p> )}
      </div> */}
      <main className="max-w-6xl mx-auto py-4">
    <div className="flex space-x-6">
      <div className="flex flex-row ">
        <div className="flex flex-col space-y-3 mr-2 ml">
          <img alt="Product thumbnail 1" className="w-20 h-20 object-cover" height="80"
            src={data.images[1]}
            width="80" />
          <img alt="Product thumbnail 2" className="w-20 h-20 object-cover" height="80"
            src={data.images[2]}
            width="80" />
          <img alt="Product thumbnail 3" className="w-20 h-20 object-cover" height="80"
            src={data.images[3]}
            width="80" />
          <img alt="Product thumbnail 4" className="w-20 h-20 object-cover" height="80"
            src={data.images[4]}
            width="80" />
          <img alt="Product thumbnail 4" className="w-20 h-20 object-cover" height="80"
            src={data.images[5]}
            width="80" />
        </div>
        
          <img alt="Main product image" className="w-[31rem] h-[31rem] object-cover"
          src={data.images[0]} />
        

      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-bold">
          {data?.title}
        </h1>
        <p className="text-3xl text-red-600 font-bold">
          {data?.price}đ
        </p>
        <div className="flex items-center space-x-2 my-4">
          <div className="flex items-center">
            <i className="fas fa-star text-yellow-500">
            </i>
            <i className="fas fa-star text-yellow-500">
            </i>
            <i className="fas fa-star text-yellow-500">
            </i>
            <i className="fas fa-star text-yellow-500">
            </i>
            <i className="fas fa-star text-yellow-500">
            </i>
          </div>
          <span className="text-gray-600">
            | (5 Customer Review)
          </span>
        </div>
        <p className="text-gray-600 mb-4">
          Setting the bar as one of the loudest speakers in its className, the Kilburn is a compact, stout-hearted hero with
          a well-balanced audio which boasts a clear midrange and extended highs for a sound.
        </p>
        <div className=" items-center mb-4">
          <span className="font-bold">
            Size
          </span>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border rounded">
              L
            </button>
            <button className="px-4 py-2 border rounded">
              XL
            </button>
            <button className="px-4 py-2 border rounded">
              XS
            </button>
          </div>
        </div>
        <div className=" items-center  mb-4">
          <span className="font-bold">
            Color
          </span>
          <div className="flex space-x-2">
            <button className="w-8 h-8 bg-black rounded-full">
            </button>
            <button className="w-8 h-8 bg-purple-600 rounded-full">
            </button>
            <button className="w-8 h-8 bg-yellow-600 rounded-full">
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-4 border border-gray-300 rounded">
            <button className="px-4 py-2  rounded">
              -
            </button>
            <span>
              1
            </span>
            <button className="px-4 py-2 rounded">
              +
            </button>
          </div>
          <a href="./category.html">
          <button className="px-7 py-2 bg-yellow-500 text-white rounded">
            Add To Cart
          </button></a>
          <button className="px-9 py-2 border rounded">
            Compare
          </button>
        </div>
        {/* <div><hr></div> */}
        <div className="text-gray-600 ">
          <p className="mb-1 mt-3">
            SKU: SS001
          </p>
          <p className="mt-1">
            Category: Sofa
          </p>
          <p className="mt-1">
            Tags: Sofa, Chair, Home, Shop
          </p>
        </div>
      </div>
    </div>


    <div className="mt-12">
      <div className="flex space-x-6 border-b">
        <button className="pb-2 border-b-2 border-black">
          Description
        </button>
        <button className="pb-2">
          Additional Information
        </button>
        <button className="pb-2">
          Reviews [5]
        </button>
      </div>
      <div className="mt-6">
        <p className="text-gray-600 mb-4">
          Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the
          unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="text-gray-600 mb-4">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar
          as one of the loudest speakers in its className, the Kilburn is a compact, stout-hearted hero with a well-balanced
          audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The
          analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced
          leather strap enables easy and stylish travel.
        </p>
        <div className="flex space-x-4">
          <img alt="Product detail image 1" className="w-1/2 h-64 object-cover" height="300"
            src="https://storage.googleapis.com/a1aa/image/j7DcMYNQlRKfAaiVhWbrelUSHOs8FJ3kowmYsziLOt3XJwjTA.jpg"
            width="400" />
          <img alt="Product detail image 2" className="w-1/2 h-64 object-cover" height="300"
            src="https://storage.googleapis.com/a1aa/image/YXesfJVFnzgJTU5pnA2gJqf5UACe8sQIeupEwIp1hU0XLBe4E.jpg"
            width="400" />
        </div>
      </div>
    </div>

    <div className="mt-12 mb-6">
      <h2 className="text-2xl text-center font-bold mb-6">
        Related Products
      </h2>
      <div className="grid grid-cols-4 gap-6">
        
        <div className="border p-4">
          <img alt="Related product 1" className="w-full h-64 object-cover mb-4" height="200"
            src="https://storage.googleapis.com/a1aa/image/6GLQoeyVphVuMqYwiqxa0NfNCbT3LswHDshMkfRM5ElnSgHnA.jpg"
            width="200" />
          <h3 className="text-lg font-bold">
            Syltherine
          </h3>
          <p className="text-gray-600 mb-2">
            Stylish cafe chair
          </p>
          <p className="text-red-600 font-bold mb-4">
            2.500.000đ
          </p>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded">
            Add to cart
          </button>
        </div>
        <div className="border p-4">
          <img alt="Related product 2" className="w-full h-64 object-cover mb-4" height="200"
            src="https://storage.googleapis.com/a1aa/image/k5mvt7mL7rrBJFQvfzjczUfq5aXwJouQ0TZjmanWE6ocJwjTA.jpg"
            width="200" />
          <h3 className="text-lg font-bold">
            Leviosa
          </h3>
          <p className="text-gray-600 mb-2">
            Stylish cafe chair
          </p>
          <p className="text-red-600 font-bold mb-4">
            1.800.000đ
          </p>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded">
            Add to cart
          </button>
        </div>
        <div className="border p-4">
          <img alt="Related product 3" className="w-full h-64 object-cover mb-4" height="200"
            src="https://storage.googleapis.com/a1aa/image/sF1Bu8u3mIq8B1yTPNiuZReuHDFvW5DIMhpMZIxXlncsE4xJA.jpg"
            width="200" />
          <h3 className="text-lg font-bold">
            Lolito
          </h3>
          <p className="text-gray-600 mb-2">
            Luxury big sofa
          </p>
          <p className="text-red-600 font-bold mb-4">
            2.000.000đ
          </p>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded">
            Add to cart
          </button>
        </div>
        <div className="border p-4">
          <img alt="Related product 4" className="w-full h-64 object-cover mb-4" height="200"
            src="https://storage.googleapis.com/a1aa/image/QJ4YJ0CeBtQnBqqngylPgwibaSdyfBQ0ejg7IdRUUsE8SgHnA.jpg"
            width="200" />
          <h3 className="text-lg font-bold">
            Respira
          </h3>
          <p className="text-gray-600 mb-2">
            Outdoor bar table and stool
          </p>
          <p className="text-red-600 font-bold mb-4">
            4.500.000đ
          </p>
          <a href="./category.html">
          <button className="px-4 py-2 bg-yellow-500 text-white rounded">
            Add to cart
          </button></a>
        </div>
      </div>
    </div>
  </main>
    </div>
  );
};

export default ProductDetail;
