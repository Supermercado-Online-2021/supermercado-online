
import Product from '../objects/Product';



interface Products {
    data: Product[]
    page: number,
    limit: number,
    count: number,
    offset?: number,
    term?: string,
    auth?: boolean,
    product?: Product
}

export default Products;
