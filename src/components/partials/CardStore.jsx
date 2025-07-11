import { FaStore } from "react-icons/fa";

const CardStore = ({ image, Alt, icon: Icon, title, description, Floor }) => {
  return (
    <>
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
        <img
        src={image}  
        // src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt={Alt}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center mb-2">
            <Icon className="text-blue-600 mr-2" />
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <p className="text-gray-600 mb-4">
            {description}
          </p>
          <p className="text-sm text-gray-500">{Floor}</p>
        </div>
      </div>
    </>
  );
};

export default CardStore;
