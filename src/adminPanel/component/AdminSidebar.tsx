import{ useState } from 'react';
import Dashboard from '../icons/Dashboard.svg'

const Sidebar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(true);

  const toggleSidebar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <div className={`w-1/2 md:w-2/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block bg-gray-100 border-r z-30 ${sideBarOpen ? '' : 'hidden'}`} id="main-nav">
      <div className="w-full h-20 border-b flex px-4 items-center mb-8">
        <p className="font-semibold text-3xl text-blue-400 pl-4">LOGO</p>
        <button onClick={toggleSidebar} className="ml-auto p-2">X</button>
      </div>

      <div className="mb-4 px-4">
        <p className="pl-4 text-sm font-semibold mb-1">MAIN</p>
        <div className="w-full flex items-center text-blue-400 h-10 pl-4 bg-gray-200 hover:bg-gray-200 rounded-lg cursor-pointer">
          {Dashboard}
          <span className="text-gray-700">Dashboard</span>
        </div>
        <div className="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
          <svg className="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
            <path d="M17.431,2.156h-3.715c-0.228,0-0.413,0.186-0.413,0.413v6.973h-2.89V6.687c0-0.229-0.186-0.413-0.413-0.413H6.285c-0.228,0-0.413,0.184-0.413,0.413v6.388H2.569c-0.227,0-0.413,0.187-0.413,0.413v3.942c0,0.228,0.186,0.413,0.413,0.413h14.862c0.228,0,0.413-0.186,0.413-0.413V2.569C17.844,2.342,17.658,2.156,17.431,2.156 M5.872,17.019h-2.89v-3.117h2.89V17.019zM9.587,17.019h-2.89V7.1h2.89V17.019z M13.303,17.019h-2.89v-6.651h2.89V17.019z M17.019,17.019h-2.891V2.982h2.891V17.019z"></path>
          </svg>
          <span className="text-gray-700">Analytics</span>
        </div>
        <div className="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
          <svg className="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
            <path d="M17.283,5.549h-5.26V4.335c0-0.222-0.183-0.404-0.404-0.404H8.381c-0.222,0-0.404,0.182-0.404,0.404v1.214h-5.26c-0.223,0-0.405,0.182-0.405,0.405v9.71c0,0.223,0.182,0.405,0.405,0.405h14.566c0.223,0,0.404-0.183,0.404-0.405v-9.71C17.688,5.731,17.506,5.549,17.283,5.549 M8.786,4.74h2.428v0.809H8.786V4.74z M16.879,15.26H3.122v-4.046h5.665v1.201c0,0.223,0.182,0.404,0.405,0.404h1.618c0.222,0,0.405-0.182,0.405-0.404v-1.201h5.665V15.26z M9.595,9.583h0.81v2.428h-0.81V9.583zM16.879,10.405h-5.665V9.19c0-0.222-0.183-0.405-0.405-0.405H9.191c-0.223,0-0.405,0.183-0.405,0.405v1.215H3.122V6.358h13.757V10.405z"></path>
          </svg>
          <span className="text-gray-700">Inventory</span>
        </div>
        <div className="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
          <svg className="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
            <path d="M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z"></path>
          </svg>
          <span className="text-gray-700">Orders</span>
        </div>
        <div className="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
          <svg className="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
            <path d="M17.049,8.914c-0.031-0.516-0.264-1.011-0.666-1.378c-0.328-0.293-0.739-0.47-1.153-0.52c-0.095-0.396-0.284-0.774-0.545-1.106c-0.493-0.634-1.222-1.008-2.018-1.008c-0.063,0-0.125,0.002-0.188,0.006c-0.35-0.516-0.859-0.946-1.482-1.202c-0.481-0.194-1.038-0.268-1.616-0.21C9.033,3.356,8.41,3.028,7.73,3.028c-0.794,0-1.522,0.374-2.018,1.008c-0.261,0.332-0.449,0.71-0.545,1.106c-0.414,0.051-0.825,0.227-1.153,0.52C3.512,7.903,3.28,8.398,3.248,8.914c-0.396,0.186-0.74,0.467-1.003,0.821C1.734,10.367,1.592,11.027,1.669,11.67c0.074,0.632,0.348,1.206,0.787,1.646c0.238,0.238,0.518,0.422,0.821,0.557c0.025,0.528,0.227,1.046,0.594,1.483c0.451,0.563,1.085,0.919,1.781,0.919c0.063,0,0.127-0.002,0.192-0.007c0.354,0.523,0.868,0.958,1.498,1.219c0.481,0.194,1.038,0.268,1.616,0.21c0.325,0.232,0.708,0.392,1.132,0.458c0.104,0.018,0.209,0.025,0.313,0.025c0.779,0,1.509-0.344,2.004-0.924c0.266-0.322,0.454-0.704,0.561-1.115c0.42-0.048,0.825-0.227,1.155-0.522c0.621-0.556,0.954-1.331,0.955-2.163c0.569-0.283,1.041-0.73,1.348-1.294C18.287,10.295,17.891,9.241,17.049,8.914 M12.199,17.159c-0.26,0.315-0.625,0.492-1.015,0.492c-0.072,0-0.146-0.006-0.221-0.018c-0.412-0.067-0.749-0.277-0.983-0.607c-0.194-0.271-0.31-0.594-0.346-0.937c-0.041-0.381-0.231-0.719-0.535-0.936c-0.287-0.203-0.648-0.278-1.016-0.211c-0.076,0.015-0.153,0.023-0.227,0.023c-0.412,0-0.749-0.276-0.983-0.607c-0.188-0.263-0.305-0.577-0.346-0.937c-0.041-0.381-0.231-0.72-0.536-0.937c-0.308-0.218-0.699-0.292-1.068-0.205c-0.07,0.016-0.145,0.023-0.218,0.023c-0.389,0-0.754-0.176-1.015-0.492c-0.271-0.329-0.41-0.74-0.381-1.168c0.034-0.57,0.309-1.091,0.736-1.435c0.271-0.217,0.594-0.334,0.936-0.346c0.413-0.013,0.796-0.186,1.059-0.482c0.26-0.293,0.404-0.676,0.405-1.078c0.001-0.57,0.256-1.1,0.681-1.45c0.307-0.245,0.661-0.371,1.037-0.371c0.008,0,0.017,0,0.025,0c0.413,0.011,0.797-0.159,1.06-0.459c0.261-0.3,0.403-0.681,0.405-1.083c0.001-0.571,0.256-1.101,0.681-1.45c0.311-0.248,0.674-0.373,1.048-0.373c0.008,0,0.016,0,0.025,0c0.407,0.009,0.793-0.157,1.059-0.459c0.266-0.301,0.41-0.683,0.41-1.083c0-0.412,0.181-0.799,0.498-1.065c0.315-0.264,0.71-0.401,1.129-0.373c0.322,0.021,0.634,0.124,0.922,0.301c0.22,0.133,0.413,0.316,0.563,0.535c0.026,0.04,0.051,0.08,0.076,0.121c0.105,0.184,0.16,0.392,0.16,0.604c0,0.4-0.141,0.782-0.403,1.073c-0.264,0.292-0.651,0.459-1.064,0.459c-0.35,0-0.692,0.126-0.972,0.369c-0.271,0.237-0.434,0.566-0.459,0.919c-0.026,0.372-0.193,0.723-0.488,1.001c-0.288,0.273-0.659,0.412-1.053,0.402c-0.01,0-0.02,0-0.031,0c-0.403,0-0.786,0.144-1.078,0.407c-0.292,0.264-0.458,0.631-0.465,1.031c-0.003,0.019-0.003,0.037-0.003,0.056c0.002,0.357-0.131,0.693-0.372,0.964c-0.243,0.273-0.577,0.426-0.939,0.436c-0.01,0-0.02,0-0.03,0c-0.4,0-0.784,0.144-1.078,0.407c-0.292,0.264-0.458,0.631-0.465,1.031c-0.003,0.019-0.003,0.037-0.003,0.056c0.002,0.357-0.131,0.693-0.372,0.964c-0.243,0.273-0.577,0.426-0.938,0.436c-0.014,0-0.027,0-0.041,0c-0.392,0-0.774-0.151-1.063-0.425c-0.299-0.285-0.475-0.676-0.478-1.092c-0.001-0.01,0-0.021,0-0.031c0-0.396,0.142-0.773,0.407-1.068c0.244-0.271,0.578-0.424,0.937-0.433c0.01,0,0.02,0,0.031,0c0.4,0,0.783-0.143,1.075-0.405c0.29-0.262,0.459-0.625,0.466-1.02c0.003-0.019,0.003-0.038,0.003-0.057c-0.002-0.357,0.131-0.693,0.372-0.964c0.243-0.273,0.577-0.426,0.938-0.436c0.01,0,0.02,0,0.031,0c0.4,0,0.783-0.143,1.075-0.405c0.29-0.262,0.459-0.625,0.466-1.02c0.003-0.019,0.003-0.038,0.003-0.057c0-0.396,0.143-0.774,0.407-1.068c0.27-0.302,0.646-0.482,1.043-0.51c0.011-0.001,0.023-0.002,0.034-0.002c0.393,0,0.774,0.151,1.064,0.426c0.265,0.247,0.438,0.575,0.502,0.939c0.073,0.4,0.275,0.769,0.597,1.059c0.32,0.287,0.71,0.459,1.128,0.496c0.406,0.037,0.789,0.207,1.058,0.482c0.267,0.273,0.405,0.626,0.409,1.033c0,0.008,0,0.017,0,0.025c-0.001,0.403,0.152,0.791,0.429,1.075C12.62,17.082,12.419,17.449,12.199,17.159"></path>
          </svg>
          <span className="text-gray-700">Settings</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
