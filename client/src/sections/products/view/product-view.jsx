/* eslint-disable import/no-duplicates */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable perfectionist/sort-imports */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import { product } from 'src/_mock/productsT';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

import TableNoData from '../product-no-data';
import UserTableRow from '../product-table-row';
import TableEmptyRows from '../table-empty-rows';
import UserTableHead from '../product-table-head';
import UserTableToolbar from '../product-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';

import { getAllProducts, getDeletedElements } from '../../../redux/actions';

import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

export default function ProductsPage() {
  const navigate = useNavigate();
  const productoss = useSelector((state) => state.allProducts);
  const productossEliminados = useSelector((state) => state.deletedElements);

  const [currentList, setCurrentList] = useState(productoss);
  const [deletedList, setdeletedList] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getDeletedElements());
    setCurrentList(productoss);
  }, [dispatch, productoss]);

  console.log('va a imprimir los estados');
  console.log(productoss);
  console.log(productossEliminados);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  if (!productoss) {
    dispatch(getAllProducts());
  }
  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = product.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: product,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;
  const handleRedireccion = () => {
    navigate('/Form'); // Utiliza navigate para redirigir
  };
  const handleDeletedList = () => {
    setdeletedList(true);
    setCurrentList(productossEliminados);
  };

  const handleActualList = () => {
    setdeletedList(false);
    setCurrentList(productoss);
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Products</Typography>
        <Button variant="contained" color="inherit" onClick={handleActualList}>
          Actuales
        </Button>
        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={handleRedireccion}
          style={{ backgroundColor: 'green', color: 'white' }}
        >
          Nuevo
        </Button>
        <Button
          variant="contained"
          color="inherit"
          onClick={handleDeletedList}
          style={{ backgroundColor: 'red', color: 'white' }}
        >
          Eliminados
        </Button>
      </Stack>

      <Card>
        <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={product.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: 'name', label: 'Nombre' },
                  { id: 'gender', label: 'gender' },
                  { id: 'category', label: 'categoria' },
                  { id: 'color', label: 'color' },

                  { id: 'cantidad', label: 'cantidad', align: 'center' },
                  { id: 'precio', label: 'precio' },
                  { id: 'sale', label: 'sale' },

                  { id: '' },
                ]}
              />
              {currentList && (
                <TableBody>
                  {currentList
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <UserTableRow
                        key={row.id}
                        id={row.id}
                        name={row.name}
                        gender={row.gender}
                        category={row.category}
                        color={row.color}
                        status={row.status}
                        img={row.img}
                        cantidad={row.quantity}
                        precio={row.price}
                        sale={row.sale}
                        deletedAt={deletedList}
                        selected={selected.indexOf(row.name) !== -1}
                        handleClick={(event) => handleClick(event, row.name)}
                      />
                    ))}
                  <TableEmptyRows
                    height={77}
                    emptyRows={emptyRows(page, rowsPerPage, currentList.length)}
                  />
                  {notFound && <TableNoData query={filterName} />}
                </TableBody>
              )}
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={product.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}
