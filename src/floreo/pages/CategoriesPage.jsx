import { MDBNavbar, MDBTypography } from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import { Category } from "../../ui/components/category";

export const CategoriesPage = () => {
  const { categories } = useSelector((state) => state.categories);
  return (
    <>
      <MDBNavbar expand="lg" bgColor="black">
        <div className="w-100 d-flex justify-content-center">
          <MDBTypography color='white' tag='h3'>Categorías</MDBTypography>
        </div>
      </MDBNavbar>

      <div className='row g-0'>
        {categories.map(category => (
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 border border-dark" key={category.id}>
            <Category data={category} />
          </div>
        ))}
      </div>
    </>
  );
}
