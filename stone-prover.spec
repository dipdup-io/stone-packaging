Name:           stone-prover
Version:        %{version}
Release:        1%{?dist}
Summary:        High-performance proof verification tool

License:        MIT
URL:            https://github.com/baking-bad/stone-prover
Source0:        %{name}-%{version}.tar.gz

BuildRequires:  gcc gcc-c++ make bazel python3-devel gmp-devel elfutils-libelf-devel
Requires:       python3 python3-numpy python3-sympy gmp elfutils-libelf

%description
Stone-prover is a high-performance proof verification tool.

%prep
%autosetup -n %{name}-%{version}

%install
mkdir -p %{buildroot}%{_bindir}
install -m 755 bazelbin/src/starkware/main/cpu/cpu_air_prover %{buildroot}%{_bindir}/cpu_air_prover
install -m 755 bazelbin/src/starkware/main/cpu/cpu_air_verifier %{buildroot}%{_bindir}/cpu_air_verifier

%files
%{_bindir}/cpu_air_prover
%{_bindir}/cpu_air_verifier

%changelog
* Wed Oct 02 2024 Your Name <youremail@example.com> - %{version}-1
- Initial RPM package for stone-prover.