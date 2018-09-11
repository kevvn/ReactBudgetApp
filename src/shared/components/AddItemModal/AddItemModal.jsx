<Modal
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
  open={this.state.open}
  onClose={() => {this.setState({open: false})}}>
  <div style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
  }}>
    <Card style={{backgroundColor: '#E0E0E0'}}>
      <div style={{margin: '.125em'}}>
        <TextField
          id="select-category"
          select
          label="Category"
          style={{
            marginLeft: 4,
            marginRight: 4,
            width: 200,
          }}
          value={this.state.selectedCategory}
          onChange={(e) => {this.setState({selectedCategory: e.target.value})}}
          SelectProps={{
            MenuProps: {
              style: {width: 200},
            },
          }}
          helperText="Please select a category"
          margin="normal"
        >
          {[{label: 'Groceries',value: 'Groceries'},].map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        
      </TextField>
      <TextField
        id="number"
        label="Budgeted Amount"
        value={this.state.amount}
        onChange={(e) => this.setState({amount: e.target.value})}
        type="number"
        
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button variant='contained' onClick={() => this.addToBudget("Groceries",this.state.selectedCategory,this.state.amount)} fullWidth={true} color='primary'>Done</Button>
      </div>
    </Card>
  </div>
</Modal>