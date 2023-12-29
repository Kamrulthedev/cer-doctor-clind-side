import { useLoaderData } from "react-router-dom";


const Checkout = () => {

    const loder = useLoaderData()
    const { title, _id } = loder;

    const handlersunmitForm = e => {
        e.perventDefault()
        const form = e.target;
        const name = form.name.value;
        const Lastname = form.Lastname.value;
        const number = form.number.value;
        const email = form.number.value;
        const result = {
            name, Lastname, number, email, result
        }
        console.log(result)
    }

    return (
        <div>
            <form onSubmit={handlersunmitForm} className="card-body">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" name="name" placeholder="First Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" name="Lastname" placeholder="Last Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Phone</span>
                        </label>
                        <input type="number" name="number" placeholder="Your Phone" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" className="btn btn-secondary" value={'Order Confirm'} />
                </div>
            </form>
        </div>
    );
};

export default Checkout;