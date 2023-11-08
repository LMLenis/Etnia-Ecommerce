/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
/* eslint-disable object-shorthand */
/* eslint-disable perfectionist/sort-imports */
/* eslint-disable func-names */
/* eslint-disable no-useless-catch */
import axios from "axios";
import getFindSelects from "../functions/getFindSelects";

// Routes Get
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_ALL_SELECTS = "GET_ALL_SELECTS";
export const GET_DETAIL_SIZE_COLOR = "GET_DETAIL_SIZE_COLOR";
export const GET_ORDER_PRICE = "GET_ORDER_PRICE";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_USERS_BY_NAME = "GET_USERS_BY_NAME";
export const GET_PRODUCTS_BY_NAME = "GET_PRODUCTS_BY_NAME";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const GET_BY_ID = "GET_BY_ID";
export const GET_ALL_COMMENTS="GET_ALL_COMMENTS";
export const GET_EMPRESA="GET_EMPRESA";
export const GET_CUENTAS="GET_CUENTAS";
export const GET_MEDIOPAGO="GET_MEDIOPAGO";
export const GET_LOGISTICA="GET_LOGISTICA";
// routes Delete
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const DELETE_COMMENT="DELETE_COMMENT";
export const DELETE_EMPRESA="DELETE_EMPRESA";
export const DELETE_CUENTAS="DELETE_CUENTAS";
export const DELETE_MEDIOPAGO="DELETE_MEDIOPAGO";
export const DELETE_LOGISTICA="DELETE_LOGISTICA";
// Routes Post
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const CREATE_USER = "CREATE_USER";
export const RESTORE_PRODUCT = "RESTORE_PRODUCT";
export const CREATE_COMMENT="CREATE_COMMENT";
export const CREATE_EMPRESA="CREATE_EMPRESA";
export const CREATE_CUENTAS="CREATE_CUENTAS";
export const CREATE_MEDIOPAGO="CREATE_MEDIOPAGO";
export const CREATE_LOGISTICA="CREATE_LOGISTICA";
// routes Put
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_PRODUCT="UPDATE_PRODUCT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const UPDATE_EMPRESA="UPDATE_EMPRESA";
export const UPDATE_CUENTAS="UPDATE_CUENTAS";
export const UPDATE_MEDIOPAGO="UPDATE_MEDIOPAGO";
export const UPDATE_LOGISTICA="UPDATE_LOGISTICA";
// Filters
export const GET_FILTER_GENDER = "GET_FILTER_GENDER";
export const GET_FILTER_CATEGORY = "GET_FILTER_CATEGORY";
export const GET_FILTER_COLOR = "GET_FILTER_COLOR";
export const GET_FILTER_SIZE = "GET_FILTER_SIZE";
export const GET_FILTER_SALE = "GET_FILTER_SALE";
export const REMOVE_FAVORITES = "REMOVE_FAVORITES";
export const FILTROS_AND_PAGINATION = "FILTROS_AND_PAGINATION";
export const PAGINATION = "SET_PAGINATION";
// errors
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const ERRORS = "ERRORS";
// carrito
// export const ADD_SHIPPING = "ADD_SHIPPING";
// export const REMOVE_SHIPPING = "REMOVE_SHIPPING";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART_ITEM_QUANTITY = "UPDATE_CART_ITEM_QUANTITY";
// export const UPDATE_SHIPPING = "UPDATE_SHIPPING";
// LocalStorage

export const LOCALSTORAGE = "LOCALSTORAGE";

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const REGISTER_USER = "REGISTER_USER";
export const ADD_SHIPPING = "ADD_SHIPPING";
export const UPDATE_SHIPPING = "UPDATE_SHIPPING";
export const REMOVE_SHIPPING = "REMOVE_SHIPPING";
export const REGISTER_USER_ERROR= "REGISTER_USER_ERROR"
export const CONFITRM_TOKEN= "CONFITRM_TOKEN"



 const URL = "http://localhost:3001";
// const URL = "https://etniasoftcommerce.up.railway.app";

export function getCuentas(){
  return async function(dispatch){
    const cuentasInfo= await axios.get(`/cuentas`);
    dispatch({
      type:GET_CUENTAS,
      payload:cuentasInfo.data.results,
    })
  }
}
export function getEmpresa(){
  return async function(dispatch){
    const empresaInfo= await axios.get(`/empresa`);
    dispatch({
      type:GET_EMPRESA,
      payload:empresaInfo.data.results,
    })
  }
}
export function getMedioPago(){
  return async function(dispatch){
    const mediopagoInfo= await axios.get(`/mediopago`);
    dispatch({
      type:GET_MEDIOPAGO,
      payload:mediopagoInfo.data.results,
    })
  }
}
export function getLogistica(){
  return async function(dispatch){
    const logisticaInfo= await axios.get(`/logistica`);
    dispatch({
      type:GET_LOGISTICA,
      payload:logisticaInfo.data.results,
    })
  }
}
export function createLogistica(newLogistica){
  return async function (dispatch){
    const info= await axios.post(`/logistica`,newLogistica);
    dispatch({
      type:CREATE_LOGISTICA,
      payload:info.data,
    })
  }
}

export function createEmpresa(newEmpresa){
  return async function (dispatch){
    const info= await axios.post(`/empresa`,newEmpresa);
    dispatch({
      type:CREATE_EMPRESA,
      payload:info.data,
    })
  }
}

export function createCuentas(newCuentas){
  return async function (dispatch){
    const info= await axios.post(`/cuentas`,newCuentas);
    dispatch({
      type:CREATE_CUENTAS,
      payload:info.data,
    })
  }
}
export function createMediopago(newMediopago){
  return async function (dispatch){
    const info= await axios.post(`/mediopago`,newMediopago);
    dispatch({
      type:CREATE_MEDIOPAGO,
      payload:info.data,
    })
  }
}

export function createProduct(newproduct) {
  return async function (dispatch) {
    const info = await axios.post(`${URL}/products`, newproduct);
    dispatch({
      type: CREATE_PRODUCT,
      payload: info.data,
    });
  };
}

export function getAllProducts() {
  return async function (dispatch) {
    const productsInfo = await axios.get(`${URL}/products`);
    console.log(productsInfo);
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: productsInfo.data.results,
    });
  };
}

export function getAllComments(id){
  return async function(dispatch){
    const commentsInfo=await axios.get(`/comments/${id}`)
    dispatch({
      type:GET_ALL_COMMENTS,
      payload:commentsInfo.data
    })
  }
}
export function createComment(payload){
  return async function(dispatch){
    const info= await axios.post(`/comments`,payload)
    dispatch({
      type:CREATE_COMMENT,
      payload:info.data
    })
  }
}

export function updateComment(payload){
  return async function(dispatch){
    const info =await axios.put(`/comments`,payload)
    dispatch({
      type:UPDATE_COMMENT,
      payload:info.data
    })
  }
}

export function deleteComment(idUser, idProduct){
  return async function (dispatch){
    const deletedComment= await axios.delete(`/comments/${idUser}/${idProduct}`)
    dispatch({
      type:DELETE_COMMENT,
      payload:deletedComment.data
    })
  }
}

export function updateCartItemQuantity(productId, newQuantity) {
  return {
    type: UPDATE_CART_ITEM_QUANTITY,
    payload: {
      productId,
      newQuantity,
    },
  };
}

export function confirmToken(token) {
  return async function (dispatch) {
    try {
      console.log("hola")
      console.log(token);
      const { data } = await axios.get(`${URL}/users/confirm/${token}`);
      console.log(data);
      dispatch({
        type: CONFITRM_TOKEN,
        payload: data,
      });
      // Devuelve una respuesta exitosa
      return { success: true, message: "Usuario registrado con éxito" };
    } catch (error) {
      // Manejo de errores
      console.error("Error al registrar usuario:", error);
      // Devuelve una respuesta de error
      return { success: false, message: "Error al registrar usuario. Inténtelo nuevamente." };
    }
  };
}

export function registerUser(payload) {
  console.log("register")
  return async function (dispatch) {
    try {
      const  respuesta  = await axios.post(`${URL}/users/register`, payload);
      console.log("sigue la data")
      console.log(respuesta);
      dispatch({
        type: REGISTER_USER,
        payload: respuesta.data,
      });
      // Devuelve una respuesta exitosa
      return { success: true, message: "Usuario registrado con éxito" };
    } catch (error) {
      // Manejo de errores
      console.error("Error al registrar usuario:", error.response.data.error);
      // Devuelve una respuesta de error
      return { success: false, message: `Error al registrar usuario: ${error.response.data.error}` };
    }
  }
}
export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
}

export function removeFromCart(productId) {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,

  };
}


export function addshipping(envio) {
  return {
    type: ADD_SHIPPING,
    payload: envio,
  };
}
export function updateshipping(shippingID, update) {
  return {
    type: UPDATE_SHIPPING,
    payload: { shippingID, update },
  };
}
export function removeshipping(shippingID) {
  return {
    type: REMOVE_SHIPPING,
    payload: shippingID,
  };
}

//  export function registerUser(payload) {
//    return async function (dispatch) {
//      const { data } = await axios.post(`${URL}/register`, payload);
//      dispatch({
//        type: REGISTER_USER,
//        payload: data,
//      });
//    };
//  }

export function putLocalstorage() {
  if (localStorage.getItem("cart")) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    return {
      type: LOCALSTORAGE,
      payload: cart,
    };
  } else {
    let cart = [];
    return {
      type: LOCALSTORAGE,
      payload: cart,
    };
  }
}

export function setNewErrors(obj) {
  return async function (dispatch) {
    dispatch({
      type: ERRORS,
      payload: obj,
    });
  };
}

export function clearErrors() {
  return async function (dispatch) {
    dispatch({
      type: CLEAR_ERRORS,
    });
  };
}

export function getProductsname(name) {
  return async function (dispatch) {
    const productsname = (await axios.get(`${URL}/products/name/${name}`)).data;
    dispatch({
      type: GET_PRODUCTS_BY_NAME,
      payload: productsname,
    });
  };
}

export function getByID(id) {
  return async function (dispatch) {
    const { data } = await axios.get(`${URL}/products/${id}`);
    dispatch({
      type: GET_BY_ID,
      payload: data,
    });
  };
}

export function getUsersByName(name) {
  return async function (dispatch) {
    const response = (await axios.get(`${URL}` + name)).data;
    dispatch({
      type: GET_USERS_BY_NAME,
      payload: response,
    });
  };
}

export function getAllUsers() {
  return async function (dispatch) {
    const allUsers = await axios.get(`${URL}/users`);
    dispatch({
      type: GET_ALL_USERS,
      payload: allUsers.data,
    });
  };
}
export function updateProduct(payload){
  return async function(dispatch){
    const info= await axios.put(`${URL}/${payload.id}`, payload);
    dispatch({
      type:UPDATE_PRODUCT,
      payload:info.data,
    });
  };
}

export function deleteProduct(id) {
  return async function (dispatch) {
    const deletedProduct = await axios.delete(`${URL}/products/${id}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: deletedProduct.data,
    });
  };
}

export function updateUser(payload) {
  return async function (dispatch) {
    const info = await axios.put(`${URL}/${payload.id}`, payload);
    dispatch({
      type: UPDATE_USER,
      payload: info.data,
    });
  };
}

export function createUser(payload) {
  return async function (dispatch) {
    const info = await axios.post(`${URL}`, payload);
    dispatch({
      type: CREATE_USER,
      payload: info.data,
    });
  };
}

export function getAllSelects() {
  return async function (dispatch) {
    const productsInfo = await getFindSelects();
    dispatch({
      type: GET_ALL_SELECTS,
      payload: productsInfo,
    });
  };
}

export function getAddFavorites(product) {
  return async (dispatch) => {
    try {
      // const { data } = await axios.get(`${URL}/favorites`);
      return dispatch({
        type: ADD_FAVORITES,
        payload: product,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function removeFav(id) {
  return {
    type: REMOVE_FAVORITES,
    payload: id,
  };
}

export function restoreProduct(id) {
  return async function (dispatch) {
    try {
      await axios.post(`${URL}/products/restore/${id}`);
      dispatch({
        type: RESTORE_PRODUCT,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: ERRORS,
        payload: error.message,
      });
    }
  };
}

export const getFiltersAndPagination = (filtros, pageNumber) => {
  return async (dispatch) => {
    // Construye un objeto que solo incluye filtros que tienen un valor definido y no son nulos
    const filtrosValidos = Object.keys(filtros).reduce((acc, key) => {
      if (filtros[key] !== null && filtros[key] !== undefined) {
        acc[key] = filtros[key];
      }
      return acc;
    }, {});

    try {
      // Construye la cadena de consulta de la URL para filtros y paginación
      const queryString = new URLSearchParams(filtrosValidos).toString();
      const url = `${URL}/products?${queryString}&page=${pageNumber}`;
      const response = await axios.get(url);

      dispatch({
        type: FILTROS_AND_PAGINATION,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error en la solicitud de paginación con filtros:", error);
    }
  };
};

export function userLogin(email, password) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${URL}/users/login`, {
        email: email,
        password: password,
      });
      const {data} = response; // Obtener los datos de la respuesta
      dispatch({
        type: USER_LOGIN,
        payload: data,
      });
      return data; // Devolver los datos de inicio de sesión
    } catch (error) {
      
      throw error; // Re-lanzar el error para manejarlo en el componente
    }
  };
}

export function userLogout() {
   return {
     type: USER_LOGOUT,
   };
 }
