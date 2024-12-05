import { Button, Input, Form } from "antd";
import { useContext, useState } from "react";
import { UserData, User } from "../context/app";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Template1 } from "./templates/template1";
import LoginModal from "./loginmodal";
import { addDoc, arrayUnion, collection, db, doc, updateDoc } from "../firebase/firebase";
import { useSearchParams } from "next/navigation";

export default function ResumeForm({ className }: { className: string }) {
  const [isDisable, setIsDisable] = useState(false);
  const { obj, setObj } = useContext<any>(UserData);
  const user = useContext(User);
  const param = useSearchParams();
  const p = param.get("id");

  function scrollFun(val: string) {
    let arr = val.split("");
    let str = "";
    let chunks = 17;
    for (let i = 0; i < val.length; i += chunks) {
      arr.splice(i + chunks, 0, "\n");
      str = arr.join("");
    }
    setObj({ ...obj, bio: val });
  }

  function checkEmail(val: string) {
    let arr = val.split("");
    let str = "";
    let chunks = 17;
    for (let i = 0; i < val.length; i += chunks) {
      arr.splice(i + chunks, 0, " ");
      str = arr.join("");
    }
    setObj({ ...obj, email: val });
  }

  async function editData() {
    const resumeRef = doc(db, "resumes", `${p}`);

    await updateDoc(resumeRef, {
      ...obj
    });
  }

  async function saveData() {
    // console.log(user.user.uid);
    const docRef = await addDoc(collection(db, "resumes"), {
      useruid: user.user.uid,
      resumeType: "template1",
      firstname: obj.firstname,
      lastname: obj.lastname,
      prof: obj.prof,
      prof2: obj.prof2,
      job: obj.job,
      bio: obj.bio,
      phone: obj.phone,
      email: obj.email,
      address: obj.address,
      organization1: obj.organization1,
      organization2: obj.organization2,
      degree1: obj.degree1,
      degree2: obj.degree2,
      lang1: obj.lang1,
      lang2: obj.lang2,
      skill1: obj.skill1,
      skill2: obj.skill2,
      skill3: obj.skill3,
      company: obj.company,
      exp: obj.exp,
      des: obj.des,
    });

    const userRef = doc(db, "user", user.user.uid);
    await updateDoc(userRef, {
      resumes: arrayUnion(docRef.id),
    });

    setIsDisable(true);
  }

  const { TextArea } = Input;

  return (
    <div className={className}>
      {/* -------------------- Personal Info ------------------- */}

      <div className="personal-info">
        <h2 className="text-2xl my-5">1. Personal Info</h2>
        <div className="flex flex-col max-w-80 gap-5">
          <div className="">
            <Form.Item name={"name"} label={"First Name"}>
              <Input
                value={obj.firstname}
                // defaultValue={obj.firstname}
                onChange={(e) => setObj({ ...obj, firstname: e.target.value })}
                className="mt-1 max-w-lg"
                placeholder="Enter your value"
                id="name"
                type="text"
              ></Input>
            </Form.Item>
          </div>
          <div className="">
            <Form.Item name={"l-name"} label={"Last Name"}>
              <Input
                value={obj.lastname}
                // defaultValue={obj.lastname}
                className="mt-1 max-w-lg"
                onChange={(e) => setObj({ ...obj, lastname: e.target.value })}
                placeholder="Enter your value"
                id="l-name"
                type="text"
              ></Input>
            </Form.Item>
          </div>
          <div className="">
            <Form.Item name={"profession"} label={"Profession"}>
              <Input
                value={obj.prof}
                // defaultValue={obj.prof}
                className="mt-1 max-w-lg"
                onChange={(e) => setObj({ ...obj, prof: e.target.value })}
                placeholder="Enter your value"
                id="profession"
                type="text"
              ></Input>
            </Form.Item>
          </div>
        </div>
      </div>

      {/* -------------------- Personal Info ------------------- */}

      {/* -------------------- Profile  ------------------- */}

      <div className="profile">
        <h2 className="text-2xl my-5">2. Profile</h2>
        <div className="flex flex-col max-w-80 gap-5">
          <div className="max-w-lg">
            <Form.Item name={"job"} label={"Job Title"}>
              <Input
                value={obj.job}
                // defaultValue={obj.job}
                className="mt-1"
                onChange={(e) => setObj({ ...obj, job: e.target.value })}
                placeholder="Enter your value"
                id="job"
                type="text"
              ></Input>
            </Form.Item>
          </div>
          <div className="">
            <Form.Item name={"profession2"} label={"Profession"}>
              <Input
                value={obj.prof2}
                // defaultValue={obj.prof2}
                className="mt-1"
                onChange={(e) => setObj({ ...obj, prof2: e.target.value })}
                placeholder="Enter your value"
                id="profession2"
                type="text"
              ></Input>
            </Form.Item>
          </div>
          <div className="">
            <Form.Item name={"bio"} label={"Bio"}>
              <TextArea
                value={obj.bio}
                // defaultValue={obj.bio}
                className="mt-1"
                onChange={(e) => {
                  scrollFun(e.target.value);
                }}
                placeholder="Enter your value"
                id="bio"
                rows={4}
                cols={40}
              ></TextArea>
            </Form.Item>
          </div>
        </div>
      </div>

      {/* -------------------- Profile ------------------- */}

      {/* -------------------- Contact ------------------- */}

      <div className="profile">
        <h2 className="text-2xl my-5">3. Contact</h2>

        <div className="flex flex-col max-w-80 gap-5 my-10">
          <div className="">
            <Form.Item name={"phone"} label={"Phone Number"}>
              <Input
                value={obj.phone}
                // defaultValue={obj.phone}
                className="mt-1"
                onChange={(e) => setObj({ ...obj, phone: e.target.value })}
                placeholder="Enter your number"
                id="phone"
                type="number"
              ></Input>
            </Form.Item>
          </div>

          <div className="">
            <Form.Item name={"email"} label={"Email"}>
              <Input
                value={obj.email}
                // defaultValue={obj.email}
                className="mt-1"
                onChange={(e) => {
                  checkEmail(e.target.value);
                }}
                placeholder="Enter your email"
                id="email"
                type="email"
              ></Input>
            </Form.Item>
          </div>

          <div className="">
            <Form.Item name={"address"} label={"Address"}>
              <TextArea
                value={obj.address}
                // defaultValue={obj.address}
                className="mt-1"
                onChange={(e) => setObj({ ...obj, address: e.target.value })}
                placeholder="Enter your address"
                id="address"
                rows={4}
                cols={40}
              ></TextArea>
            </Form.Item>
          </div>
        </div>
      </div>

      {/* -------------------- Contact ------------------- */}

      {/* -------------------- Education ------------------- */}

      <div className="profile">
        <h2 className="text-2xl my-5">4. Education</h2>

        <div className="flex flex-col max-w-80 gap-5 my-10">
          <h2>Degree 1.</h2>

          <div className="">
            <Form.Item name={"degree"} label={"Degree"}>
              <Input
                value={obj.degree1}
                // defaultValue={obj.degree1}
                className="mt-1"
                onChange={(e) => setObj({ ...obj, degree1: e.target.value })}
                placeholder="Enter your degree"
                id="degree"
                type="text"
              ></Input>
            </Form.Item>
          </div>

          <div className="">
            <Form.Item name={"organization"} label={"Organization"}>
              <Input
                value={obj.organization1}
                // defaultValue={obj.organization1}
                className="mt-1"
                onChange={(e) =>
                  setObj({ ...obj, organization1: e.target.value })
                }
                placeholder="Enter your organization"
                id="organization"
                type="text"
              ></Input>
            </Form.Item>
          </div>

          <div className="">
            <Form.Item name={"year"} label={"Year"}>
              <Input
                value={obj.year1}
                // defaultValue={obj.year1}
                className="mt-1"
                onChange={(e) => setObj({ ...obj, year1: e.target.value })}
                placeholder="Enter your year"
                id="year"
                type="number"
              ></Input>
            </Form.Item>
          </div>
        </div>

        <div className="flex flex-col max-w-80 gap-5 my-10">
          <h2>Degree 2.</h2>

          <div className="">
            <Form.Item name={"degree2"} label={"Degree"}>
              <Input
                value={obj.degree2}
                // defaultValue={obj.degree2}
                className="mt-1"
                onChange={(e) => setObj({ ...obj, degree2: e.target.value })}
                placeholder="Enter your degree"
                id="degree2"
                type="text"
              ></Input>
            </Form.Item>
          </div>

          <div className="">
            <Form.Item name={"organization2"} label={"Organization"}>
              <Input
                className="mt-1"
                value={obj.organization2}
                // defaultValue={obj.organization2}
                onChange={(e) =>
                  setObj({ ...obj, organization2: e.target.value })
                }
                placeholder="Enter your organization"
                id="organization2"
                type="text"
              ></Input>
            </Form.Item>
          </div>

          <div className="">
            <Form.Item name={"year2"} label={"Year"}>
              <Input
                value={obj.year2}
                // defaultValue={obj.year2}
                className="mt-1"
                onChange={(e) => setObj({ ...obj, year2: e.target.value })}
                placeholder="Enter your year"
                id="year2"
                type="number"
              ></Input>
            </Form.Item>
          </div>
        </div>
      </div>

      {/* -------------------- Education ------------------- */}

      {/* -------------------- Language ------------------- */}

      <div className="profile">
        <h2 className="text-2xl my-5">5. Languages</h2>

        <div className="flex flex-col max-w-80 gap-5 my-10">
          <div className="">
            <Form.Item name={"language1"} label={"Language 1"}>
              <Input
                value={obj.lang1}
                // defaultValue={obj.lang1}
                className="mt-1"
                onChange={(e) => setObj({ ...obj, lang1: e.target.value })}
                placeholder="Enter your value"
                id="language1"
                type="text"
              ></Input>
            </Form.Item>
          </div>

          <div className="">
            <Form.Item name={"language2"} label={"Language 2"}>
              <Input
                value={obj.lang2}
                // defaultValue={obj.lang2}
                className="mt-1"
                onChange={(e) => setObj({ ...obj, lang2: e.target.value })}
                placeholder="Enter your value"
                id="email"
                type="email"
              ></Input>
            </Form.Item>
          </div>
        </div>
      </div>

      {/* -------------------- Language ------------------- */}

      {/* -------------------- Skills ------------------- */}

      <div className="profile">
        <h2 className="text-2xl my-5">6. Skills</h2>

        <div className="flex flex-col max-w-80 gap-5 my-10">
          <div className="">
            <Form.Item name={"skill1"} label={"Skill 1"}>
              <Input
                value={obj.skill1}
                // defaultValue={obj.skill1}
                className="mt-1"
                onChange={(e) => setObj({ ...obj, skill1: e.target.value })}
                placeholder="Enter your skill"
                id="skill1"
                type="text"
              ></Input>
            </Form.Item>
          </div>

          <div className="">
            <Form.Item name={"skill2"} label={"Skill 2"}>
              <Input
                value={obj.skill2}
                // defaultValue={obj.skill2}
                className="mt-1"
                onChange={(e) => setObj({ ...obj, skill2: e.target.value })}
                placeholder="Enter your value"
                id="skill2"
                type="text"
              ></Input>
            </Form.Item>
          </div>

          <div className="">
            <Form.Item name={"skill3"} label={"Skill 3"}>
              <Input
                value={obj.skill3}
                // defaultValue={obj.skill3}
                className="mt-1"
                onChange={(e) => setObj({ ...obj, skill3: e.target.value })}
                placeholder="Enter your value"
                id="skill3"
                type="text"
              ></Input>
            </Form.Item>
          </div>
        </div>
      </div>

      {/* -------------------- Skills ------------------- */}

      {/* -------------------- Experience ------------------- */}

      <div className="profile">
        <h2 className="text-2xl my-5">7. Experience</h2>

        <div className="flex flex-col max-w-80 gap-5 my-10">
          <div className="">
            <Form.Item name={"company"} label={"Company"}>
              <Input
                value={obj.company}
                // defaultValue={obj.company}
                className="mt-1"
                onChange={(e) => setObj({ ...obj, company: e.target.value })}
                placeholder="Enter your company"
                id="company"
                type="text"
              ></Input>
            </Form.Item>
          </div>

          <div className="">
            <Form.Item name={"companyyear"} label={"Experirnce"}>
              <Input
                value={obj.exp}
                // defaultValue={obj.exp}
                className="mt-1"
                onChange={(e) => setObj({ ...obj, exp: e.target.value })}
                placeholder="Enter your year experienced"
                id="companyyear"
                type="text"
              ></Input>
            </Form.Item>
          </div>

          <div className="">
            <Form.Item name={"description"} label={"Description"}>
              <Input
                value={obj.des}
                // defaultValue={obj.des}
                className="mt-1"
                onChange={(e) => setObj({ ...obj, des: e.target.value })}
                placeholder="Enter your description"
                id="description"
                type="text"
              ></Input>
            </Form.Item>
          </div>
        </div>
      </div>

      {/* -------------------- Experience ------------------- */}

      <div className="hidden md:block my-10 text-center">
        {user ? (
          <Button
            disabled={isDisable}
            onClick={() => {
              p ? editData() : saveData();
            }}
            type="primary"
            className="btn text-xl px-6 mx-3"
          >
            Save
          </Button>
        ) : (
          <LoginModal buttonText={"Save"} buttonClass="btn text-xl px-6 mx-3" />
        )}

        <PDFDownloadLink fileName="resume" document={<Template1 data={obj} />}>
          <Button type="primary" className="btn text-xl px-6 mx-3">
            Download
          </Button>
        </PDFDownloadLink>
      </div>
    </div>
  );
}
