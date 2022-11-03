import ProfileTopNav from "./profileTopNav";
import ProfileTop from "./profileTop";

//Nav
import TransactionRecordsNav from "./transactionRecords/transactionRecordsNav";
import AccountSettingsNav from "./accountSettings/accountSettingsNav";

//Mainpage
import Portal from './transactionRecords/portal/portal';
import EditProfile from "./accountSettings/editProfile";
import Security from "./accountSettings/security";

const Profile = ({profileTopNavSelect,profileAccountSettingsMainNavSelect,profileTransactionRecordsMainNavSelect}) => {
    return (
        <div className="xl:mx-auto lg:mx-auto md:mx-auto sm:mx-0">
            <ProfileTop />
            <ProfileTopNav profileTopNavSelect={profileTopNavSelect}/>

            {/* MainNavSelect */}
            {profileTopNavSelect === "accountSettings" ? <AccountSettingsNav profileAccountSettingsMainNavSelect={profileAccountSettingsMainNavSelect} /> : ""}
            {profileTopNavSelect === "transactionRecords" ? <TransactionRecordsNav profileTransactionRecordsMainNavSelect={profileTransactionRecordsMainNavSelect} /> : ""}

            {/* MainContent */}
            {profileTopNavSelect === "accountSettings" && profileAccountSettingsMainNavSelect === "security" ? <Security /> : ""}
            {profileTopNavSelect === "accountSettings" && profileAccountSettingsMainNavSelect === "editProfile" ? <EditProfile /> : ""}
            {profileTopNavSelect === "transactionRecords" && profileTransactionRecordsMainNavSelect === "portal" ? <Portal /> : ""}
        </div>
    )
}

export default Profile;