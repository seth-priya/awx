Default installer uses Centos:7 image for creating AWX setup. 
In order to use UBI:8 image for PPC64LE architecture, rename below Dockerfiles respectively:

	From:
	- installer/roles/image_build/files/Dockerfile.sdist.ubi.ppc64le
	- installer/roles/image_build/templates/Dockerfile.j2.ubi.ppc64le

	To:
	- installer/roles/image_build/files/Dockerfile.sdist.ppc64le
	- installer/roles/image_build/templates/Dockerfile.j2.ppc64le
