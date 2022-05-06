import Header from "./Components/Header"

function App() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <div className="d-flex justify-content-end mb-4">
                        <button
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#add-user-modal"
                        >
                            Add User
                        </button>
                    </div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Is Admin</th>
                                <th scope="col">Job Title</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Join Date</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
            <div className="modal" tabIndex="-1" id="add-user-modal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add User Form</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div class="mb-3 col-12 col-md-6">
                                        <label for="first-name" class="form-label">
                                            First name
                                        </label>
                                        <input type="text" class="form-control" id="first-name" />
                                    </div>
                                    <div class="mb-3 col-12 col-md-6">
                                        <label for="last-name" class="form-label">
                                            Last name
                                        </label>
                                        <input type="text" class="form-control" id="last-name" />
                                    </div>

                                    <div class="mb-3 col-12 col-md-6">
                                        <label for="job-title" class="form-label">
                                            Job title
                                        </label>
                                        <input type="text" class="form-control" id="job-title" />
                                    </div>
                                    <div class="mb-3 col-12 col-md-6">
                                        <label for="email" class="form-label">
                                            Email
                                        </label>
                                        <input type="email" class="form-control" id="email" />
                                    </div>
                                    <div class="mb-3 col-12 col-md-6">
                                        <label for="mobile" class="form-label">
                                            Mobile
                                        </label>
                                        <input type="text" class="form-control" id="mobile" />
                                    </div>
                                    <div className="mb-3 col-12 col-md-6 d-flex align-items-center">
                                        <div class="form-check">
                                            <input
                                                type="checkbox"
                                                class="form-check-input"
                                                id="is-admin"
                                            />
                                            <label class="form-check-label" for="is-admin">
                                                Is admin
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
