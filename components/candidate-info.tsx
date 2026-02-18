"use client"

interface CandidateInfoProps {
  candidateName: string
  setCandidateName: (v: string) => void
  registrationNumber: string
  setRegistrationNumber: (v: string) => void
  rollNumber: string
  setRollNumber: (v: string) => void
}

export function CandidateInfo({
  candidateName,
  setCandidateName,
  registrationNumber,
  setRegistrationNumber,
  rollNumber,
  setRollNumber,
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
        <input
          id="candidateName"
          type="text"
          value={candidateName}
          onChange={(e) => setCandidateName(e.target.value)}
          className="w-full rounded border border-border bg-secondary px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label
          htmlFor="registrationNumber"
          className="mb-1 block text-sm font-medium text-foreground"
        >
          2. Registration Number
        </label>
        <input
          id="registrationNumber"
          type="text"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
          className="w-full rounded border border-border bg-secondary px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
          placeholder="Enter registration number"
        />
      </div>
      <div>
        <label
          htmlFor="rollNumber"
          className="mb-1 block text-sm font-medium text-foreground"
        >
          3. Roll Number
        </label>
        <input
          id="rollNumber"
          type="text"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          className="w-full rounded border border-border bg-secondary px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
          placeholder="Enter roll number"
        />
      </div>
    </div>
  )
}
