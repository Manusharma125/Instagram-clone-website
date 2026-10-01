import { MyProfile, SuggestedFriend } from "./Friends";


function SideChat() {
    return (
        <div className="hidden lg:flex max-w-[39%] mx-auto mt-10">
            <div>
                <MyProfile />

                <div className="flex justify-between mt-5 mb-3">
                    <h1 className="text-sm font-bold">Suggested For You</h1>
                    <a href="" className="text-sm font-bold hover:text-gray-500">See all</a>
                </div>

                <SuggestedFriend />
                <SuggestedFriend />
                <SuggestedFriend />
                <SuggestedFriend />

                <div className="text-[12px] text-gray-700 mt-10">
                    <p><a href="" className="hover:underline">About .</a>
                        <a href="" className="hover:underline"> Help .</a>
                        <a href="" className="hover:underline"> Press .</a>
                        <a href="" className="hover:underline"> Api .</a>
                        <a href="" className="hover:underline"> Jobs .</a>
                        <a href="" className="hover:underline"> Privacy .</a>
                        <a href="" className="hover:underline"> Terms .</a></p>
                    
                    <p><a href="" className="hover:underline">Location .</a>
                        <a href="" className="hover:underline"> Language .</a>
                        <a href="" className="hover:underline"> Meta Verified</a></p>
                    
                    <p className="mt-3">@ 2026 INSTAGRAM FROM META</p>
                </div>

            </div>
        </div>
    );
};

export default SideChat;