/* eslint-disable spaced-comment */
/* eslint-disable no-undef */
/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
/* eslint-disable object-shorthand */
/* eslint-disable perfectionist/sort-imports */
/* eslint-disable func-names */
/* eslint-disable no-useless-catch */
import axios from 'axios';
import getFindSelects from '../functions/getFindSelects';
// import ProductDetail from "src/pages/productDetail/ProductDetail";

// Routes Get
export const GET_USER_BY_ID = 'GET_USER_BY_ID';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_ALL_SELECTS = 'GET_ALL_SELECTS';
export const GET_DETAIL_SIZE_COLOR = 'GET_DETAIL_SIZE_COLOR';
export const GET_ORDER_PRICE = 'GET_ORDER_PRICE';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_USERS_BY_NAME = 'GET_USERS_BY_NAME';
export const GET_PRODUCTS_BY_NAME = 'GET_PRODUCTS_BY_NAME';
export const ADD_FAVORITES = 'ADD_FAVORITES';
export const GET_BY_ID = 'GET_BY_ID';
export const GET_EMPRESA = 'GET_EMPRESA';
export const GET_CUENTAS = 'GET_CUENTAS';
export const GET_MEDIOPAGO = 'GET_MEDIOPAGO';
export const GET_LOGISTICA = 'GET_LOGISTICA';
export const GET_ALL_FAVS = 'GET_ALL_FAVS';
export const GET_ALL_CARTS = 'GET_ALL_CARTS';
export const GET_PURCHASE_DETAIL = 'GET_PURCHASE_DETAIL';
export const GET_ALL_PURCHASES = 'GET_ALL_PURCHASES';
export const GET_USER_PURCHASES = 'GET_USER_PURCHASES';
export const GET_DELETED_ELEMENTS = 'GET_DELETED_ELEMENTS';
export const GET_DELETED_USERS = 'GET_DELETED_USERS';

// routes Delete
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const DELETE_USER = 'DELETE_USER';
export const DELETE_EMPRESA = 'DELETE_EMPRESA';
export const DELETE_CUENTAS = 'DELETE_CUENTAS';
export const DELETE_MEDIOPAGO = 'DELETE_MEDIOPAGO';
export const DELETE_LOGISTICA = 'DELETE_LOGISTICA';
export const REMOVE_FAV_BACK = 'REMOVE_FAV_BACK';
export const REMOVE_CART_BACK = 'REMOVE_CART_BACK';
// Routes Post
export const REGISTRO_TERCEROS = 'REGISTRO_TERCEROS';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const CREATE_USER = 'CREATE_USER';
export const RESTORE_PRODUCT = 'RESTORE_PRODUCT';
export const CREATE_EMPRESA = 'CREATE_EMPRESA';
export const CREATE_CUENTAS = 'CREATE_CUENTAS';
export const CREATE_MEDIOPAGO = 'CREATE_MEDIOPAGO';
export const CREATE_LOGISTICA = 'CREATE_LOGISTICA';
export const NEW_FAVORITE = 'NEW_FAVORITE';
export const NEW_CART = 'NEW_CART';
export const CREATE_PURCHASE = 'CREATE_PURCHASE';

// routes Put
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const UPDATE_EMPRESA = 'UPDATE_EMPRESA';
export const UPDATE_CUENTAS = 'UPDATE_CUENTAS';
export const UPDATE_MEDIOPAGO = 'UPDATE_MEDIOPAGO';
export const UPDATE_LOGISTICA = 'UPDATE_LOGISTICA';
// Filters
export const GET_FILTER_GENDER = 'GET_FILTER_GENDER';
export const GET_FILTER_CATEGORY = 'GET_FILTER_CATEGORY';
export const GET_FILTER_COLOR = 'GET_FILTER_COLOR';
export const GET_FILTER_SIZE = 'GET_FILTER_SIZE';
export const GET_FILTER_SALE = 'GET_FILTER_SALE';
export const REMOVE_FAVORITES = 'REMOVE_FAVORITES';
export const FILTROS_AND_PAGINATION = 'FILTROS_AND_PAGINATION';
export const PAGINATION = 'SET_PAGINATION';
// errors
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const ERRORS = 'ERRORS';
// export const ADD_SHIPPING = "ADD_SHIPPING";
// export const REMOVE_SHIPPING = "REMOVE_SHIPPING";
// carrito
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_ITEM_QUANTITY = 'UPDATE_CART_ITEM_QUANTITY';
// export const UPDATE_SHIPPING = "UPDATE_SHIPPING";
// LocalStorage
export const LOCALSTORAGE = 'LOCALSTORAGE';
export const PERSIST_USER = 'PERSIST_USER';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const REGISTER_USER = 'REGISTER_USER';
export const ADD_SHIPPING = 'ADD_SHIPPING';
export const UPDATE_SHIPPING = 'UPDATE_SHIPPING';
export const REMOVE_SHIPPING = 'REMOVE_SHIPPING';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';
export const CONFITRM_TOKEN = 'CONFITRM_TOKEN';
export const FINISH_PURCHASE = 'FINISH_PURCHASE';
export const CLEAR_CART = 'CLEAR_CART';
export const SAVE_CART = 'SAVE_CART';
export const LOAD_CART = 'LOAD_CART';

// Reviews
export const GET_ALL_REVIEWS = 'GET_ALL_REVIEWS';
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const GET_REVIEW_BY_ID = 'GET_REVIEW_BY_ID';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';

//const URL = 'http://localhost:3001';
// const URL = "https://etniasoftcommerce.up.railway.app";

export const registroTerceros = (payload) => async (dispatch) => {
  console.log('holaaa desde la accion apenas entra');
  console.log(payload);
  try {
    const info = await axios.post(`/users/registerTerceros`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // Verificar si la respuesta es exitosa (estado 2xx)
    if (info.status >= 200 && info.status < 300) {
      dispatch({
        type: REGISTRO_TERCEROS,
        payload: info.data,
      });
    } else {
      // Manejar error de respuesta no exitosa
      console.error(
        'Error en accion registro terceros - Respuesta no exitosa:',
        info.status,
        info.statusText
      );
    }
  } catch (error) {
    // Manejar error de la solicitud
    console.error('Error en accion registro terceros:', error);
  }
};

export function saveCart(object) {
  return {
    type: SAVE_CART,
    payload: object,
  };
}

export function loadCart(newCart) {
  return {
    type: LOAD_CART,
    payload: newCart,
  };
}

export function getAllReviews() {
  return async function (dispatch) {
    const reviewsInfo = await axios.get(`/reviews`);
    dispatch({
      type: GET_ALL_REVIEWS,
      payload: reviewsInfo.data,
    });
  };
}
export function createReview(newReview) {
  return async function (dispatch) {
    const reviews = await axios.post(`/reviews`, newReview);
    dispatch({
      type: CREATE_REVIEW,
      payload: reviews.data,
    });
  };
}
export function getReviewById(id) {
  console.log(id)
  return async function (dispatch) {
    const reviewsInfo = await axios.get(`/reviews/${id}`);
    console.log(reviewsInfo.data);
    dispatch({
      type: GET_REVIEW_BY_ID,
      payload: reviewsInfo.data,
    });
  };
}
export function updateReview(payload) {
  return async function (dispatch) {
    const info = await axios.put(`/${payload.id}`, payload);
    dispatch({
      type: UPDATE_REVIEW,
      payload: info.data,
    });
  };
}
export function deleteReview(id) {
  return async function (dispatch) {
    const deletedReviews = await axios.delete(`/reviews/${id}`);
    dispatch({
      type: DELETE_REVIEW,
      payload: deletedReviews.data,
    });
  };
}

export function finishPurchase(objectPago) {
  console.log(objectPago);

  return async function compra(dispatch) {
    console.log('entre a la compra');
    try {
      const response = await axios.post(`/purchase/order`, objectPago);
      window.location.href = response.data.init_point;

      dispatch({
        type: FINISH_PURCHASE,

        payload: response.data,
      });
    } catch (error) {
      console.error('Error in finishPurchase:', error);
    }
  };
}

export function getAllPurchases() {
  return async function (dispatch) {
    const purchasesInfo = await axios.get(`/purchase`);
    dispatch({
      type: GET_ALL_PURCHASES,
      payload: purchasesInfo.data,
    });
  };
}

export function getUserPurchases(id) {
  return async function (dispatch) {
    const purchasesInfo = await axios.get(`/purchase/${id}`);
    dispatch({
      type: GET_USER_PURCHASES,
      payload: purchasesInfo.data,
    });
  };
}
export function getPurchaseDetail(payload) {
  return async function (dispatch) {
    const productDetail = await axios.get(`/buyings/acceptpayment${payload}`);
    dispatch({
      type: GET_PURCHASE_DETAIL,
      payload: productDetail,
    });
  };
}

export function getAllFavs(id) {
  console.log('me despacharon');

  return async function (dispatch) {
    const response = await axios.get(`/favs/${id}`);
    dispatch({
      type: GET_ALL_FAVS,
      payload: response.data,
    });
  };
}

export function AddFavoriteBack(objectId) {
  return async function (dispatch) {
    const response = await axios.post(`/favs`, objectId);
    dispatch({
      type: NEW_FAVORITE,
      payload: response.data,
    });
  };
}

export function removeFavoriteBack(objectId) {
  return async function (dispatch) {
    const response = await axios.put(`/favs`, objectId);
    dispatch({
      type: REMOVE_FAV_BACK,
      payload: response.data,
    });
  };
}

export function getAllCarts(id) {
  return async function (dispatch) {
    const response = await axios.get(`/cart/${id}`);
    dispatch({
      type: GET_ALL_CARTS,
      payload: response.data,
    });
  };
}

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
}

export function AddCartBack(objectId) {
  return async function (dispatch) {
    const response = await axios.post(`/cart`, objectId);
    dispatch({
      type: NEW_CART,
      payload: response.data,
    });
  };
}

export function removeCartBack(objectId) {
  return async function (dispatch) {
    const response = await axios.put(`/cart`, objectId);
    dispatch({
      type: REMOVE_CART_BACK,
      payload: response.data,
    });
  };
}

export function getCuentas() {
  return async function (dispatch) {
    const cuentasInfo = await axios.get(`/cuentas`);

    dispatch({
      type: GET_CUENTAS,
      payload: cuentasInfo.data.results,
    });
  };
}

export function getEmpresa() {
  return async function (dispatch) {
    const empresaInfo = await axios.get(`/empresa`);
    dispatch({
      type: GET_EMPRESA,
      payload: empresaInfo.data.results,
    });
  };
}

export function getMedioPago() {
  return async function (dispatch) {
    const mediopagoInfo = await axios.get(`/mediopago`);

    dispatch({
      type: GET_MEDIOPAGO,
      payload: mediopagoInfo.data.results,
    });
  };
}

export function getLogistica() {
  return async function (dispatch) {
    const logisticaInfo = await axios.get(`/logistica`);

    dispatch({
      type: GET_LOGISTICA,
      payload: logisticaInfo.data.results,
    });
  };
}

export function createLogistica(newLogistica) {
  return async function (dispatch) {
    try {
      console.log('logistica');
      const info = await axios.post(`/tables/postlogistica`, newLogistica);
      dispatch({
        type: CREATE_LOGISTICA,
        payload: info.data,
      });
    } catch (error) {
      throw error;
    }
  };
}

export function createEmpresa(newEmpresa) {
  return async function (dispatch) {
    const info = await axios.post(`/empresa`, newEmpresa);
    dispatch({
      type: CREATE_EMPRESA,
      payload: info.data,
    });
  };
}

export function createCuentas(newCuentas) {
  return async function (dispatch) {
    const info = await axios.post(`/cuentas`, newCuentas);
    dispatch({
      type: CREATE_CUENTAS,
      payload: info.data,
    });
  };
}

export function createMediopago(newMediopago) {
  return async function (dispatch) {
    const info = await axios.post(`/mediopago`, newMediopago);
    dispatch({
      type: CREATE_MEDIOPAGO,
      payload: info.data,
    });
  };
}

export function createProduct(newproduct) {
  console.log(newproduct);
  return async function (dispatch) {
    try {
      const { data } = await axios.post(`/products`, newproduct);
      console.log(data);
      console.log(newproduct);

      dispatch({
        type: CREATE_PRODUCT,
        payload: data,
      });
    } catch (error) {
      throw error.response.data;
    }
  };
}

export function deleteEmpresa(id) {
  return async function (dispatch) {
    const deletedEmpresa = await axios.delete(`/empresa/${id}`);
    dispatch({
      type: DELETE_EMPRESA,
      payload: deletedEmpresa.data,
    });
  };
}

export function deleteCuentas(id) {
  return async function (dispatch) {
    const deletedCuentas = await axios.delete(`/cuentas/${id}`);
    dispatch({
      type: DELETE_CUENTAS,
      payload: deletedCuentas.data,
    });
  };
}

export function deleteMediopago(id) {
  return async function (dispatch) {
    const deletedMediopago = await axios.delete(`/mediopago/${id}`);
    dispatch({
      type: DELETE_MEDIOPAGO,
      payload: deletedMediopago.data,
    });
  };
}

export function deleteLogistica(id) {
  return async function (dispatch) {
    const deletedLogistica = await axios.delete(`/logistica/${id}`);
    dispatch({
      type: DELETE_LOGISTICA,
      payload: deletedLogistica.data,
    });
  };
}

export function updateEmpresa(payload) {
  return async function (dispatch) {
    const info = await axios.put(`/${payload.id}`, payload);
    dispatch({
      type: UPDATE_EMPRESA,
      payload: info.data,
    });
  };
}

export function updateCuentas(payload) {
  return async function (dispatch) {
    const info = await axios.put(`/${payload.id}`, payload);
    dispatch({
      type: UPDATE_CUENTAS,
      payload: info.data,
    });
  };
}

export function updateMediopago(payload) {
  return async function (dispatch) {
    try {
      const info = await axios.put(`/${payload.id}`, payload);
      dispatch({
        type: UPDATE_MEDIOPAGO,
        payload: info.data,
      });
    } catch (error) {
      throw error;
    }
  };
}

export function updateLogistica(payload) {
  return async function (dispatch) {
    try {
      const info = await axios.put(`/tables/putlogistica/${payload.id}`, payload);
      dispatch({
        type: UPDATE_LOGISTICA,
        payload: info.data,
      });
    } catch (error) {
      throw error;
    }
  };
}

export function getAllProducts() {
  return async function (dispatch) {
    const productsInfo = await axios.get(`/products`);
    console.log(productsInfo);
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: productsInfo.data.results,
    });
  };
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
      console.log('hola');
      console.log(token);
      const { data } = await axios.get(`/users/confirm/${token}`);
      console.log(data);
      dispatch({
        type: CONFITRM_TOKEN,
        payload: data,
      });
      // Devuelve una respuesta exitosa
      return { success: true, message: 'Usuario registrado con éxito' };
    } catch (error) {
      // Manejo de errores
      console.error('Error al registrar usuario:', error);
      // Devuelve una respuesta de error
      return { success: false, message: 'Error al registrar usuario. Inténtelo nuevamente.' };
    }
  };
}

export function registerUser(payload) {
  console.log('register');
  return async function (dispatch) {
    try {
      const respuesta = await axios.post(`/users/register`, payload);
      console.log('sigue la data');
      console.log(respuesta);
      dispatch({
        type: REGISTER_USER,
        payload: respuesta.data,
      });
      // Devuelve una respuesta exitosa
      return { success: true, message: 'Usuario registrado con éxito' };
    } catch (error) {
      // Manejo de errores
      console.error('Error al registrar usuario:', error.response.data.error);
      // Devuelve una respuesta de error
      return {
        success: false,
        message: `Error al registrar usuario: ${error.response.data.error}`,
      };
    }
  };
}

export function removeFromCart(productId) {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
}

export function clearCart() {
  return {
    type: CLEAR_CART,
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
  if (localStorage.getItem('cart')) {
    let cart = JSON.parse(localStorage.getItem('cart'));
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
    const productsname = (await axios.get(`/products/name/${name}`)).data;
    dispatch({
      type: GET_PRODUCTS_BY_NAME,
      payload: productsname,
    });
  };
}

export function getByID(id) {
  return async function (dispatch) {
    const { data } = await axios.get(`/products/${id}`);
    console.log(data);
    dispatch({
      type: GET_BY_ID,
      payload: data,
    });
  };
}

export function getUserByID(id) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`/users/${id}`);
      console.log(data);
      dispatch({
        type: GET_USER_BY_ID,
        payload: data,
      });
    } catch (error) {
      throw error;
    }
  };
}

export function getUsersByName(name) {
  return async function (dispatch) {
    const response = (await axios.get(`` + name)).data;
    dispatch({
      type: GET_USERS_BY_NAME,
      payload: response,
    });
  };
}

export function getAllUsers() {
  return async function (dispatch) {
    const allUsers = await axios.get(`/users`);
    dispatch({
      type: GET_ALL_USERS,
      payload: allUsers.data,
    });
  };
}
export function updateProduct(payload) {
  return async function (dispatch) {
    try {
      console.log(payload.id);
      const info = await axios.put(`/products/put/${payload.id}`, payload);
      dispatch({
        type: UPDATE_PRODUCT,
        payload: info.data,
      });
    } catch (error) {
      throw error;
    }
  };
}

export function deleteProduct(id) {
  return async function (dispatch) {
    const deletedProduct = await axios.delete(`/products/delete/${id}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: deletedProduct.data,
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

export function deleteUser(id) {
  return async function (dispatch) {
    try {
      const deletedUser = await axios.delete(`/users/delete/${id}`);
      getAllUsers();
      dispatch({
        type: DELETE_USER,
        payload: deletedUser.data,
      });
      window.location.reload();
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      throw error;
    }
  };
}

// export function deleteUser(id){
//   return async function(dispatch){
//     const deletedUser= await axios.delete(`${URL}/users/${id}`);
//     dispatch({
//       type:DELETE_USER,
//       payload:deletedUser.data,
//     })
//   }
// }

export function updateUser(payload) {
  return async function (dispatch) {
    const info = await axios.put(`/users/put/${payload.id}`, payload);
    dispatch({
      type: UPDATE_USER,
      payload: info.data,
    });
  };
}

export function createUser(payload) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(`/users`, payload);
      dispatch({
        type: CREATE_USER,
        payload: data,
      });
    } catch (error) {
      throw error.response.data;
    }
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

export function removeFav(id) {
  return {
    type: REMOVE_FAVORITES,
    payload: id,
  };
}

export function restoreProduct(id) {
  return async function (dispatch) {
    try {
      await axios.post(`/products/products/restore/${id}`);
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
export function restoreUser(id) {
  return async function (dispatch) {
    try {
      await axios.post(`/users/user/restore/${id}`);
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
      const url = `/products?${queryString}&page=${pageNumber}`;
      const response = await axios.get(url);
      console.log(response.data)
      dispatch({
        type: FILTROS_AND_PAGINATION,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error en la solicitud de paginación con filtros:', error);
    }
  };
};

export function userLogin(email, password) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`/users/login`, {
        email: email,
        password: password,
      });
      const { data } = response; // Obtener los datos de la respuesta
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

export function userLogeado(user) {
  return async function (dispatch) {
    try {
      dispatch({
        type: PERSIST_USER,
        payload: user,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDeletedElements() {
  return async function (dispatch) {
    const deletedElements = await axios.get(`/deletedElements`);
    dispatch({
      type: GET_DELETED_ELEMENTS,
      payload: deletedElements.data,
    });
  };
}

export function getDeletedUsers() {
  return async function (dispatch) {
    const deletedElementsUsers = await axios.get(`/deletedElements/users`);
    dispatch({
      type: GET_DELETED_USERS,
      payload: deletedElementsUsers.data,
    });
  };
}