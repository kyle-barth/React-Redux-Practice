import React from 'react'

const EditExpense = (props) => (
    <div>
        Editing Expense {props.match.params.id}
    </div>
)

export default EditExpense