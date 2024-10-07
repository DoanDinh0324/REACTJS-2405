import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductTop() {
    return (
        <div className="container d-flex justify-content-center text-center" style={{ maxWidth: '810px' }}>
            <div className="">
                <main id="links" className="my-2">
                    <div className="row">
                        <div className="col-12 my-2">
                            <a href="" className="d-block transition-transform transform-hover">
                                <img src="https://i.transtechvietnam.com/uploads/block_images/c2a1c0f9a0b317eb048d581b7e2797c5.png" className="rounded img-fluid" alt="" loading="lazy" />
                            </a>
                        </div>
                        <div className="col-12 my-2">
                            <h2 className="text-white h2 font-weight-bold text-break text-center">
                                Đoàn Định
                            </h2>
                        </div>
                        <div className="col-12 my-2 text-left">
                            <h5 className="text-white h5 text-break" style={{float:'left'}}>
                                Trans Tech Programing and Technology Development LLC.
                            </h5>
                        </div>

                        <div className="col-12 my-2">
                            <div className="bg-black rounded-lg shadow">
                                <div className="p-4 text-white text-center text-break">
                                    Công ty chúng tôi chuyên cung cấp các sản phẩm công nghệ và các giải pháp quản trị bằng phần mềm app. Các sản phẩm đều được tối ưu hoá và điều chỉnh phù hợp với nhu cầu của từng khách hàng. Hãy để chúng tôi được hỗ trợ bạn!
                                </div>
                            </div>
                        </div>
                        <div className="col-12 my-2">
                        <div className="bg-black rounded-lg shadow">
                            <h2 className="text-white text-center text-break">Các sản phẩm của công ty</h2>
                            <p className="text-white text-center text-break">
                                App quản lý quán bi-a, billiards: Giúp quản lý thu ngân, quản lý hệ thống điện trong quán, quản lý bật tắt đèn bàn bóng từ xa... <br />
                                Tối ưu hoá quá trình vận hành và quản lý quán, giảm thiểu chi phí vận hành, chi phí nhân công, chi phí điện. <br />
                                Thuận tiện cho quá trình quản lý, có thể làm việc và kiểm soát quán từ xa.
                            </p>
                        </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default ProductTop;
