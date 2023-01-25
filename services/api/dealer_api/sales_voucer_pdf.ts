
import { client } from "../general_api/cookie_instance"
const GetSalesVoucherPdf = async(pdf_link:any) => 
{   
    const api_res = await client.get(`${pdf_link}`).then((res)=>{
        console.log("pdf res axios",res);
        const file = new Blob(
            [res.data], 
            {type: 'application/pdf'});

            //Build a URL from the file
    const fileURL = URL.createObjectURL(file);
    //Open the URL on new Window
        // window.open(fileURL);
        // return pdf_link
    }).catch((err)=>console.log(err));
    console.log("pdf res",api_res);

    return pdf_link
}

export default GetSalesVoucherPdf 