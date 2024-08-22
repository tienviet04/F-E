import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";
export default function Question() {
  return (
    <>
      <div className="pt-12 max-xl:mx-4">
        <div className="flex">
          <div>
            <p className="text-white font-medium text-[38px] pb-4 flex-grow max-sm:text-2xl ">
              Câu hỏi thường gặp
            </p>
            <p className="text-[#999999] pb-8 max-md:text-sm text-lg ">
              Bạn có câu hỏi? Chúng tôi đã có câu trả lời! Hãy xem phần Câu hỏi thường gặp của chúng tôi để
              tìm câu trả lời cho những câu hỏi phổ biến nhất về VMovies
            </p>
          </div>
          <div className="max-sm:hidden  flex items-center pl-12 ml-auto">
            <Link
              to={"/support"}
              className="inline-block rounded border  border-red-600 bg-red-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-red-600 "
            >
              <p className="w-[75px]">Đặt câu hỏi</p>
            </Link>
          </div>

        </div>
        <div className=" max-sm:flex sm:hidden flex items-center">
          <Link
            to={"/support"}
            className="inline-block rounded border border-red-600 bg-red-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-red-600 "
          >
            Đặt câu hỏi
          </Link>
        </div>
        <div className="pt-8">
          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-8">
            <div className="relative flex items-center max-w-[620px] py-2">
              <div className="border-[#262626] border-2 rounded-lg p-3 bg-[#1a1a1a]">
                <p className="text-white text-lg">01</p>
              </div>
              <Accordion
                sx={{
                  bgcolor: 'black',
                  color: 'white',
                  borderBottom: '2px solid gray',
                  '& .MuiAccordionSummary-root': {
                    bgcolor: 'black',
                    color: 'white',
                    '& .MuiSvgIcon-root': {
                      color: 'white',
                    },
                  },
                  '& .MuiAccordionDetails-root': {
                    bgcolor: 'black',
                    color: 'white',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  VMovies là gì?
                </AccordionSummary>
                <AccordionDetails>
                  StreamVibe is a streaming service that allows you to watch movies and shows on demand.
                </AccordionDetails>
              </Accordion>
            </div>
            {/* End item 1 */}
            <div className="relative border-b-2 border-transparent">
              <div className="relative flex items-center max-w-[620px] py-2">
                <div className="border-[#262626] border-2 rounded-lg p-3 bg-[#1a1a1a]">
                  <p className="text-white text-lg">02</p>
                </div>
                <Accordion
                  sx={{
                    bgcolor: 'black',
                    color: 'white',
                    borderBottom: '2px solid gray',
                    '& .MuiAccordionSummary-root': {
                      bgcolor: 'black',
                      color: 'white',
                      '& .MuiSvgIcon-root': {
                        color: 'white',
                      },
                    },
                    '& .MuiAccordionDetails-root': {
                      bgcolor: 'black',
                      color: 'white',
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    VMovies có những gói bao nhiêu tiền?
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            {/* End item 2 */}
            <div className="relative border-b-2 border-transparent">
              <div className="relative flex items-center max-w-[620px] py-2">
                <div className="border-[#262626] border-2 rounded-lg p-3 bg-[#1a1a1a]">
                  <p className="text-white text-lg">03</p>
                </div>
                <Accordion
                  sx={{
                    bgcolor: 'black',
                    color: 'white',
                    borderBottom: '2px solid gray',
                    '& .MuiAccordionSummary-root': {
                      bgcolor: 'black',
                      color: 'white',
                      '& .MuiSvgIcon-root': {
                        color: 'white',
                      },
                    },
                    '& .MuiAccordionDetails-root': {
                      bgcolor: 'black',
                      color: 'white',
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Nội dung nào có sẵn trên VMovies
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            {/* End item 3 */}
            <div className="relative border-b-2 border-transparent">
              <div className="relative flex items-center max-w-[620px] py-2">
                <div className="border-[#262626] border-2 rounded-lg p-3 bg-[#1a1a1a]">
                  <p className="text-white text-lg">04</p>
                </div>
                <Accordion
                  sx={{
                    bgcolor: 'black',
                    color: 'white',
                    borderBottom: '2px solid gray',
                    '& .MuiAccordionSummary-root': {
                      bgcolor: 'black',
                      color: 'white',
                      '& .MuiSvgIcon-root': {
                        color: 'white',
                      },
                    },
                    '& .MuiAccordionDetails-root': {
                      bgcolor: 'black',
                      color: 'white',
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Làm thế nào để tôi xem trên VMovies?
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            {/* End item 4 */}
            <div className="relative border-b-2 border-transparent">
              <div className="relative flex items-center max-w-[620px] py-2">
                <div className="border-[#262626] border-2 rounded-lg p-3 bg-[#1a1a1a]">
                  <p className="text-white text-lg">05</p>
                </div>
                <Accordion
                  sx={{
                    bgcolor: 'black',
                    color: 'white',
                    borderBottom: '2px solid gray',
                    '& .MuiAccordionSummary-root': {
                      bgcolor: 'black',
                      color: 'white',
                      '& .MuiSvgIcon-root': {
                        color: 'white',
                      },
                    },
                    '& .MuiAccordionDetails-root': {
                      bgcolor: 'black',
                      color: 'white',
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Đăng ký trên VMovies như nào?
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            {/* End item 5 */}
            <div className="relative border-b-2 border-transparent">
              <div className="relative flex items-center max-w-[620px] py-2">
                <div className="border-[#262626] border-2 rounded-lg p-3 bg-[#1a1a1a]">
                  <p className="text-white text-lg">06</p>
                </div>
                <Accordion
                  sx={{
                    bgcolor: 'black',
                    color: 'white',
                    borderBottom: '2px solid gray',
                    '& .MuiAccordionSummary-root': {
                      bgcolor: 'black',
                      color: 'white',
                      '& .MuiSvgIcon-root': {
                        color: 'white',
                      },
                    },
                    '& .MuiAccordionDetails-root': {
                      bgcolor: 'black',
                      color: 'white',
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Bản dùng thử miễn phí VMovies là gì?
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            {/* End item 6 */}
            <div className="relative border-b-2 border-transparent">
              <div className="relative flex items-center max-w-[620px] py-2">
                <div className="border-[#262626] border-2 rounded-lg p-3 bg-[#1a1a1a]">
                  <p className="text-white text-lg">07</p>
                </div>
                <Accordion
                  sx={{
                    bgcolor: 'black',
                    color: 'white',
                    borderBottom: '2px solid gray',
                    '& .MuiAccordionSummary-root': {
                      bgcolor: 'black',
                      color: 'white',
                      '& .MuiSvgIcon-root': {
                        color: 'white',
                      },
                    },
                    '& .MuiAccordionDetails-root': {
                      bgcolor: 'black',
                      color: 'white',
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Làm cách nào để liên hệ với bộ phận hỗ trợ khách hàng của VMovies?
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            {/* End item 7 */}
            <div className="relative border-b-2 border-transparent">
              <div className="relative flex items-center max-w-[620px] py-2">
                <div className="border-[#262626] border-2 rounded-lg p-3 bg-[#1a1a1a]">
                  <p className="text-white text-lg">08</p>
                </div>
                <Accordion
                  sx={{
                    bgcolor: 'black',
                    color: 'white',
                    borderBottom: '2px solid gray',
                    '& .MuiAccordionSummary-root': {
                      bgcolor: 'black',
                      color: 'white',
                      '& .MuiSvgIcon-root': {
                        color: 'white',
                      },
                    },
                    '& .MuiAccordionDetails-root': {
                      bgcolor: 'black',
                      color: 'white',
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Có bao nhiêu cách để thanh toán trên VMovies?
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            {/* End item 8*/}
          </div>
        </div>
      </div>
    </>
  );
}
