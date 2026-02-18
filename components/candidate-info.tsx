interface CandidateInfoProps {
  candidateName: string
  registrationNumber: string
  rollNumber: string
}

export function CandidateInfo({
  candidateName,
  registrationNumber,
  rollNumber,
}: CandidateInfoProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div>
        <label
          htmlFor="candidateName"
          className="mb-1 block text-sm font-medium text-foreground"
        >
          1. Candidate Name
        </label>
        <div
          id="candidateName"
          className="w-full rounded border border-border bg-muted px-3 py-2 text-sm text-foreground"
        >
          {candidateName}
        </div>
      </div>
      <div>
        <label
          htmlFor="registrationNumber"
          className="mb-1 block text-sm font-medium text-foreground"
        >
          2. Registration Number
        </label>
        <div
          id="registrationNumber"
          className="w-full rounded border border-border bg-muted px-3 py-2 text-sm text-foreground"
        >
          {registrationNumber}
        </div>
      </div>
      <div>
        <label
          htmlFor="rollNumber"
          className="mb-1 block text-sm font-medium text-foreground"
        >
          3. Roll Number
        </label>
        <div
          id="rollNumber"
          className="w-full rounded border border-border bg-muted px-3 py-2 text-sm text-foreground"
        >
          {rollNumber}
        </div>
      </div>
    </div>
  )
}
