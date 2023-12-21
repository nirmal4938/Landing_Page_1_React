import { Image } from "primereact/image";
import React from "react";

const OurDealsIn = () => {
  return (
    <React.Fragment>
      <h2 className="title">Top Brands</h2>
      {/* <div className="grid">
        <div className="col-6">
          <h4>1</h4>
        </div>
        <div className="col-6">
          <h4>2</h4>
        </div>
        <div className="col-6">
          <h4>3</h4>
        </div>
        <div className="col-6">
          <h4>4</h4>
        </div>
      </div> */}
      <div className="grid ml-0 mr-0">
        <div className="col-6 lg:col-3">
          <Image
            src="https://logos-world.net/wp-content/uploads/2020/09/Samsung-Mobile-Logo-2005-2012.png"
            alt="Samsung"
            width="100"
            className="max-w-max"
          />
        </div>
        <div className="col-6 lg:col-3">
          <Image
            src="https://4.bp.blogspot.com/-6Co91og7iig/WMz5-T8f6DI/AAAAAAAAGkM/W0DcIbNQomkDEwnwCaM9VJ7TAHoZEdE4wCLcB/s1600/vivo-mobile-brand-logo.png"
            alt="Vivo"
            width="250"
            className="max-w-max"
          />
        </div>
        <div className="col-6 lg:col-3">
          <Image
            src="https://1.bp.blogspot.com/-wNis94Xn_ls/WMz59XvevQI/AAAAAAAAGj4/IW9CD36-Z0IGMTOSVXakqIVUdw0m8tueQCLcB/s1600/oppo-mobile-brand-logo.jpg"
            alt="Oppo"
            width="250"
            className="max-w-max"
          />
        </div>
        <div className="col-6 lg:col-3">
          <Image
            src="https://3.bp.blogspot.com/-6a7WQELyQY8/WMz5-BpgH5I/AAAAAAAAGkI/XdehGRRntikO6xx98AS1o1y_gYEIV9jMgCLcB/s1600/videocon-mobile-brand-logo.jpg"
            alt="Videocon"
            width="250"
            className="max-w-max"
          />
        </div>
        <div className="col-6 lg:col-3">
          <Image
            src="https://4.bp.blogspot.com/-kA29I2hU4qk/WMz54CqYb9I/AAAAAAAAGiA/lQ2lWXP_n6II9g068G77YURirHnkFglKACLcB/s1600/SONY-mobile-brand-logo.png"
            alt="Sony"
            width="250"
            className="max-w-max"
          />
        </div>
        <div className="col-6 lg:col-3">
          <Image
            src="https://3.bp.blogspot.com/-mm_XKizaolM/WMz59CU6dWI/AAAAAAAAGjw/QS_WFumhGaczTivCrG6FY7vgly0iZJV-gCLcB/s1600/oneplus-mobile-brand-logo.png"
            alt="One Plus"
            width="250"
            className="max-w-max"
          />
        </div>
        <div className="col-6 lg:col-3">
          <Image
            src="https://2.bp.blogspot.com/-bcVjzmgp5mY/WMz59dkCVJI/AAAAAAAAGj0/n_gJFvEEs-8-578NDIWHzJ1RmaIc-059QCLcB/s1600/nokia-mobile-brand-logo.png"
            alt="Nokia"
            width="250"
            className="max-w-max"
          />
        </div>
        <div className="col-6 lg:col-3">
          <Image
            src="https://4.bp.blogspot.com/-sr_K7wJQkIY/WMz5875PHmI/AAAAAAAAGjs/LxsIm5HcIYsn7M3sUqvNepJAOyMy2hoqQCLcB/s1600/motorola-mobile-brand-logo.png"
            alt="Motorola"
            width="250"
            className="max-w-max"
          />
        </div>
        <div className="col-6 lg:col-3">
          <Image
            src="https://2.bp.blogspot.com/-dUIfhm_rfJ0/WMz5965U35I/AAAAAAAAGkE/zCDTrRsd3HQ7W0h0Sg2IV9DBWxFdqv-aACLcB/s1600/reliance-mobile-brand-logo.jpg"
            alt="Jio"
            width="250"
            className="max-w-max"
          />
        </div>
        <div className="col-6 lg:col-3">
          <Image
            src="https://2.bp.blogspot.com/-ojqDnSoNKZA/WMz58ib6G3I/AAAAAAAAGjk/LTM_lli2hVsvCQxKI9VqOM8xHVtDOCUuACLcB/s1600/micromax-mobile-brand-logo.jpg"
            alt="Micromax"
            width="250"
            className="max-w-max"
          />
        </div>
        <div className="col-6 lg:col-3">
          <Image
            src="https://2.bp.blogspot.com/-zwwzG79K3cs/WMz58TwmHTI/AAAAAAAAGjg/A2tAih_SIw8aolTNw48oqPFULfl4waYbgCLcB/s1600/mi-mobile-brand-logo.png"
            alt="MI"
            width="250"
            className="max-w-max"
          />
        </div>

        <div className="col-6 lg:col-3">
          <Image
            src="https://4.bp.blogspot.com/-ELaoZjVRRLI/WMz5-tfcoYI/AAAAAAAAGkU/Aj4jXrB6h0Yz1raKcS7-BfLx_IbJ7eRfgCLcB/s1600/zen-mobile-brand-logo.jpg"
            alt="Zen"
            width="150"
            className="max-w-max"
          />
        </div>
        <div className="col-6 lg:col-3">
          <Image
            src="https://2.bp.blogspot.com/-T8poirk4HnI/WMz58ITTttI/AAAAAAAAGjU/lb3oZCK6aoAv6KPngW4443b_0zMmVEpHQCLcB/s1600/lg-mobile-brand-logo.png"
            alt="LG"
            width="250"
            className="max-w-max"
          />
        </div>
        <div className="col-6 lg:col-3">
          <Image
            src="https://1.bp.blogspot.com/-OnDQ_-q_z3c/WMz57gl5qYI/AAAAAAAAGjQ/7u34LFdc_SMH-be4N-99uQr6W2LEjl2zQCLcB/s1600/lenovo-mobile-brand-logo.jpg"
            alt="Lenevo"
            width="200"
            className="max-w-max"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default OurDealsIn;
