import React from 'react';

export default props =>{
    const small = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
    const big = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
    return (
        <div style={{margin: '20px 0 0 0'}}>
            <label>Выберите размер списка...</label>
            <div style={{display:'flex', justifyContent:'center', padding: '30px 0'}}>
                <button onClick={()=>props.onSelect(small)} className="btn btn-primary" style={{margin: '0 10px'}}>32 строки</button>
                <button onClick={()=>props.onSelect(big)} className="btn btn-secondary" style={{margin: '0 10px'}}>1000 строк</button>
            </div>
        </div>
    )
}