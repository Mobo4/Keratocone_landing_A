
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import AnimatedBackground from '@/components/AnimatedBackground';
import { Check, X } from 'lucide-react';

const LasikComparison = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-teal-50 relative overflow-hidden">
      <AnimatedBackground colorScheme="green" numberOfCircles={8} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            LASIK vs. Other <span className="text-eyecare-blue">Vision Correction Options</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Compare the benefits and considerations of different vision correction methods to understand why LASIK might be right for you.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <Table className="w-full bg-white shadow-lg rounded-lg">
            <TableHeader>
              <TableRow className="bg-eyecare-lighter-blue/30">
                <TableHead className="w-1/5">Vision Correction Method</TableHead>
                <TableHead className="w-1/5">Convenience</TableHead>
                <TableHead className="w-1/5">Maintenance</TableHead>
                <TableHead className="w-1/5">Long-Term Cost</TableHead>
                <TableHead className="w-1/5">Visual Freedom</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">LASIK</TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    <Check className="text-green-500 h-5 w-5" />
                  </div>
                  <div className="text-xs mt-1">One-time procedure</div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    <Check className="text-green-500 h-5 w-5" />
                  </div>
                  <div className="text-xs mt-1">Minimal follow-ups</div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    <Check className="text-green-500 h-5 w-5" />
                  </div>
                  <div className="text-xs mt-1">One-time investment</div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    <Check className="text-green-500 h-5 w-5" />
                  </div>
                  <div className="text-xs mt-1">High freedom</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Glasses</TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    <X className="text-red-500 h-5 w-5" />
                  </div>
                  <div className="text-xs mt-1">Can be lost/broken</div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    <Check className="text-green-500 h-5 w-5" />
                  </div>
                  <div className="text-xs mt-1">Easy care</div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    <X className="text-red-500 h-5 w-5" />
                  </div>
                  <div className="text-xs mt-1">Ongoing replacements</div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    <X className="text-red-500 h-5 w-5" />
                  </div>
                  <div className="text-xs mt-1">Limited freedom</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Contact Lenses</TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    <X className="text-red-500 h-5 w-5" />
                  </div>
                  <div className="text-xs mt-1">Daily insertion/removal</div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    <X className="text-red-500 h-5 w-5" />
                  </div>
                  <div className="text-xs mt-1">Daily cleaning/solutions</div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    <X className="text-red-500 h-5 w-5" />
                  </div>
                  <div className="text-xs mt-1">Ongoing purchases</div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    <Check className="text-green-500 h-5 w-5" />
                  </div>
                  <div className="text-xs mt-1">Good but temporary</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">PRK (Alternative Laser Surgery)</TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    <Check className="text-green-500 h-5 w-5" />
                  </div>
                  <div className="text-xs mt-1">One-time procedure</div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    <Check className="text-green-500 h-5 w-5" />
                  </div>
                  <div className="text-xs mt-1">Minimal follow-ups</div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    <Check className="text-green-500 h-5 w-5" />
                  </div>
                  <div className="text-xs mt-1">One-time investment</div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    <Check className="text-green-500 h-5 w-5" />
                  </div>
                  <div className="text-xs mt-1">High freedom</div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default LasikComparison;
