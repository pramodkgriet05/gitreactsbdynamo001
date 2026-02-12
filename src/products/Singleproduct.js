


function Singleproduct({data})
{


    function displayproduct()
    {
        alert(data.id)
    }


    return(
         <div className="card mb-4">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="productcard">
                                                        <a href={"/product/" +data.id}>
                                                   <img src={data.thumbnail} class="img-fluid rounded-start amazon-pointer" onClick={e=>displayproduct()} alt="..."/>
                                                   </a>
                                                   </div>

                                                </div>
                                                <div className="col-8">
                                                    <div className="card-body">
                                                        <div >
                                                             <a href={"/product/"+data.id}>
                                                           <h5 className="card-title amazon-pointer btn:hover" onClick={e=>displayproduct()} > {data.title}</h5>
                                                           </a>
                                                           <h5 className="card-tile"> <i class="bi bi-currency-rupee"></i>{data.price}</h5>
                                                           <h6 > <i class="bi bi-star-fill"></i>{data.rating}</h6>
                                                           <div>
                                                            <button className="btn btn-warning" >Add to cart</button>
                                                            </div>

                                                        </div>

                                                    </div>


                                                </div>

                                            </div>

                                        </div>
                                    





    )

}
export default Singleproduct