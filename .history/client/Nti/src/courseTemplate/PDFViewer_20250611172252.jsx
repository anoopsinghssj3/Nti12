import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PDFViewer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { pdfUrl, courseName } = location.state || {};

    if (!pdfUrl) {
        return (
            <div className="container py-5 text-center">
                <h3>No PDF provided</h3>
                <button className="btn btn-primary mt-3" onClick={() => navigate(-1)}>Go Back</button>
            </div>
        );
    }

    return (
        <div className="container-fluid p-4">
            <h4 className="mb-3">{courseName ? `${courseName} Curriculum` : "Course PDF"}</h4>
            <div style={{ height: "80vh" }}>
                <iframe
                    src={pdfUrl}
                    title="Course Curriculum PDF"
                    width="100%"
                    height="100%"
                    style={{ border: "1px solid #ccc" }}
                ></iframe>
            </div>
            <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>Back to Course</button>
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae atque dolorem odit maiores ea non pariatur eligendi alias et, porro natus aspernatur ut minima saepe fugit! Tenetur enim pariatur veniam, voluptatem nostrum, tempore cum suscipit culpa numquam dolor molestiae illum provident expedita officia incidunt. Fugit assumenda cupiditate ab nobis vero magni eos, expedita harum amet quisquam provident delectus voluptatem non eligendi sapiente quos doloribus culpa fugiat dolorum facilis unde nam accusantium excepturi. Porro accusantium doloribus, natus repellendus, saepe temporibus aut maxime at ipsam praesentium exercitationem quam? Suscipit deserunt exercitationem amet, in illum obcaecati officia, aut distinctio, autem ratione similique facere sapiente incidunt. Illum ipsum in error reprehenderit at incidunt voluptatibus alias magnam, suscipit rerum natus quo ad saepe voluptates nobis quia eaque repudiandae veniam aliquam facere minus maiores officia. Beatae aut provident modi libero, amet nemo, necessitatibus itaque quam nam, harum autem nihil voluptatibus non! Nisi, maiores assumenda et veniam cum, dolores incidunt hic molestias ducimus optio, consequatur non voluptatem id a sapiente? Officia expedita animi similique voluptates ab provident ullam eos? Suscipit id adipisci molestiae, corporis deserunt explicabo fugit, eveniet, a nulla possimus tempore laudantium consequuntur! Molestias doloribus ullam iure doloremque quas sed cupiditate aliquam soluta vel aliquid culpa facere perspiciatis velit provident maxime, harum tempore neque aperiam vitae autem quis quasi porro enim. Laboriosam veritatis cupiditate dolor facilis quas at explicabo eveniet nobis quos inventore molestiae obcaecati eos illum debitis reprehenderit ex, molestias tempora iure non. Magni alias possimus fuga voluptatibus eaque ipsum, nemo ea temporibus exercitationem illum odio molestias commodi debitis autem voluptatum adipisci. Fugit, veritatis eligendi debitis ea expedita ex quis cumque sunt illo ipsam. Incidunt ab eaque, magnam eos exercitationem quidem atque cum dolorem, ipsa fuga voluptas dolorum libero accusamus magni illum cumque enim omnis architecto explicabo a accusantium molestias. Magnam incidunt fuga accusamus ab iure mollitia quia, voluptates odit natus modi unde ullam sapiente porro! Deleniti voluptatum, asperiores magnam dolorem laboriosam commodi perferendis. Et sapiente modi libero, dolor esse mollitia, nesciunt ullam obcaecati, cumque dolore expedita maxime earum facere tenetur perferendis vitae optio corrupti quasi voluptatum. Nemo provident error qui doloremque numquam, ea earum impedit nam blanditiis, voluptatum sunt, natus quis suscipit quia nostrum adipisci accusantium velit tenetur dolorum. Blanditiis labore modi dolores laboriosam obcaecati et quis veritatis reprehenderit qui tempore, tenetur vitae? Distinctio iure rem porro atque alias nobis perferendis dicta. Esse impedit minima magnam labore nulla architecto consectetur adipisci amet repellat corporis sequi id, iste doloremque iusto nobis rem cum omnis aspernatur excepturi sapiente alias animi. Repudiandae vitae eligendi labore reiciendis corporis dicta eius suscipit optio earum dolorum, quae commodi doloribus voluptatum exercitationem cum ipsa animi quo laborum adipisci ipsum natus obcaecati. Modi, a fugiat. Accusantium quae vel, cupiditate repudiandae sunt est suscipit pariatur? Eius quisquam nihil quod sint maiores distinctio explicabo ipsa, laudantium accusantium, tempora voluptates nisi, alias consequuntur cumque natus saepe veritatis molestiae laborum debitis ullam quas dignissimos quibusdam. Dicta, a atque nobis error in exercitationem architecto laborum? Qui minima perferendis atque sed nostrum vero laudantium possimus dignissimos molestiae id.
        </div>

    );
};

export default PDFViewer;
