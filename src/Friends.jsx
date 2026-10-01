

export function MyProfile() {
    return (
        <div className="flex justify-between items-center gap-10">
            <div className="flex items-center gap-2">
                <img className="rounded-full w-12 h-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUy-t00mImJn20OoJQGOZ-hpNBUnrKty6pmaC96C6r_Q&s=10" alt="Story" />
                <div>
                    <h1 className="text-sm font-bold">
                        Shaury_sharma_125
                    </h1>
                    <p className="text-sm text-gray-400">Shaury Sharma</p>
                </div>
            </div>
            <a href="" className="text-sm text-indigo-800 hover:underline">Switch</a>
        </div>
    );
};

export function SuggestedFriend() {
    return (
        <div className="flex justify-between items-center gap-10 my-3">
            <div className="flex items-center gap-2">
                <img className="rounded-full w-12 h-12 cursor-pointer" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUy-t00mImJn20OoJQGOZ-hpNBUnrKty6pmaC96C6r_Q&s=10" alt="Story" />
                <div>
                    <h1 className="text-sm font-bold cursor-pointer">
                        User_Name
                    </h1>
                    <p className="text-sm text-gray-400">Suggested for you</p>
                </div>
            </div>
            <a href="" className="text-sm text-indigo-800 hover:text-indigo-500">Follow</a>
        </div>
    );
};

