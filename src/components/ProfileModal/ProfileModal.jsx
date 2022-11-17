import { Modal, useMantineTheme } from "@mantine/core";

const ProfileModal = ({ modalOpened, setModalOpened }) => {
  const theme = useMantineTheme();
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form action="" className="infoForm">
        <div>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            className="infoInput"
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            className="infoInput"
          />
        </div>

        <div>
          <input
            type="text"
            name="worksat"
            placeholder="Works At"
            className="infoInput"
          />
        </div>

        <div>
          <input
            type="text"
            name="livesin"
            placeholder="Lives In"
            className="infoInput"
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            className="infoInput"
          />
        </div>

        <div>
          <input
            type="text"
            name="relationship"
            placeholder="Relationship Status"
            className="infoInput"
          />
        </div>

        <div>
          Profile Image
          <input type="file" name="profileimg" />
          Cover Image
          <input type="file" name="coverImg" />
        </div>

        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
};

export default ProfileModal;
