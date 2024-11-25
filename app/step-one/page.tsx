import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Personal Info',
};

export default async function Page() {
	return (
		<div>
			<form>
				<h1>Personal Info</h1>
				{/* Form fields go here */}
				<div className="space-y-4">
					<label>Step Content</label>
					<input type="text" placeholder="Enter something..." className="input-field" />
				</div>
			</form>
		</div>
	);
}