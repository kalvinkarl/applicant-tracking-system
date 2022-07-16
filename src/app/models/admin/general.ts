export class GeneralEvaluation{
	applicantId?: Number;
	eligibility?: String;
	salaryGrade?: String;
	placeOfAssignment?: String;
	statusOfAppointment?: String;
	educationalAttainment?: String;
	dateOfLastPromotion?: Date;
	latestIpcrRating?: Number;
	remarks?: String;
}
export class Experience{
	applicantId?: Number;
	positionDesignation?: string;
	from?: Date;
	to?: Date;
}
export class Training{
	applicantId?: Number;
	title?: String;
	providerOrganizer?: String;
	from?: Date;
	to?: Date;
	hours?: Number;
	typeOfLD?: String;
}