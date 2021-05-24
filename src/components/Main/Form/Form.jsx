import React, {useState, useContext} from 'react';
import {TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';
import {ExpenseTrackerContext} from '../../../context/context';
import { v4 as uuidv4} from 'uuid';
import {expenseCategories, incomeCategories} from '../../../constants/categories';
import formateDate from '../../../utils/formateDate'

import useStyles from './styles';

const initialFormState = {
    type: 'Income',
    category: '',
    amount: '',
    date: formateDate(new Date()),
}

const Form = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState(initialFormState);
    const {addTransaction} = useContext(ExpenseTrackerContext);

    const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;

    const createTransaction = () => {
        const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4()}
        addTransaction(transaction);
        setFormData(initialFormState);
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom>
                    ....
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                        <MenuItem value="Bussiness">Bussiness</MenuItem>
                        <MenuItem value="Salary">Salary</MenuItem>
                        {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="amount" fullWidth value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})} />
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" label="date" fullWidth value={formData.date} onChange={(e) => setFormData({...formData, date: formateDate(e.target.value)})} />
            </Grid>

            <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>Create</Button>
        </Grid>
    )
}

export default Form;
