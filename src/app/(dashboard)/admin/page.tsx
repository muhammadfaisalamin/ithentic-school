import UserCard from '@/app/components/UserCard';

export default function AdminPage() {
	return (
		// STRUKTUR DASAR KONTEN
		<div className="p-4 flex gap-4 flex-col md:flex-row">
			{/* LEFT */}
			<div className="w-full lg:w-2/3">
				{/* USER CARDS */}
				<div className="">
					<UserCard type="student" />
					<UserCard type="teacher" />
					<UserCard type="parent" />
					<UserCard type="staff" />
				</div>
			</div>
			{/* RIGHT */}
			<div className="w-full lg:w-1/3">r</div>
		</div>
	);
}
