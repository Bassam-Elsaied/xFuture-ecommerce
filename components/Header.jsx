

function Header({locale}) {


  return (
    <div className='products-heading'>
      <h2>{locale === 'ar' ? "الافضل مبيعا": "Best Selling products"}</h2>
      <p>{locale === 'ar' ? "أنفق أقل، وابتسم أكثر." : "Spend less. Smile more."}</p>
     </div> 
  )
}

export default Header