import React, { useEffect } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteUserAction, getAllUserAction } from '../redux/userAction';
import { Button, ButtonGroup } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';





const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});



const Home = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.data)

    // console.log("user data", users)

    useEffect(() => {
        dispatch(getAllUserAction())
    }, [])

    const handleDelete = (id) => {
        if (window.confirm('are you sure wanted to delete user ?')) {
            dispatch(deleteUserAction(id))
        }
        // console.log('delete')
    }

    const classes = useStyles();

    return (
        <div>
            <Button variant="contained" color="primary"
                onClick={() => navigate('/addUser')}
            >
                ADD user
            </Button>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>id</StyledTableCell>
                            <StyledTableCell align="center">name</StyledTableCell>
                            <StyledTableCell align="center">Address</StyledTableCell>
                            <StyledTableCell align="center">email</StyledTableCell>
                            <StyledTableCell align="center">contact</StyledTableCell>
                            <StyledTableCell align="center">action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users && users.map((user) => (
                            <StyledTableRow key={user.name}>
                                <StyledTableCell component="th" scope="row">
                                    {user.id}
                                </StyledTableCell>
                                <StyledTableCell align="center">{user.name}</StyledTableCell>
                                <StyledTableCell align="center">{user.address}</StyledTableCell>
                                <StyledTableCell align="center">{user.email}</StyledTableCell>
                                <StyledTableCell align="center">{user.contact}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <ButtonGroup variant="text" aria-label="contained primary button group">
                                        <Button
                                            color="primary"
                                            onClick={() => navigate(`/editUser/${user.id}`)}
                                        >
                                            edit
                                        </Button>
                                        <Button
                                            color="secondary"
                                            onClick={() => handleDelete(user.id)}
                                        >
                                            delete
                                        </Button>
                                    </ButtonGroup>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Home
